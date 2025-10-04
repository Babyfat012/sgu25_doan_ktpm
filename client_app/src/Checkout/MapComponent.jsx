import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const MapComponent = ({ fromAddress, toAddress, onDistanceCalculated, onAddressSuggestions }) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [markers, setMarkers] = useState([]);
    const [routeLayer, setRouteLayer] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);

    // Initialize map
    useEffect(() => {
        if (!mapInstanceRef.current) {
            mapInstanceRef.current = L.map(mapRef.current).setView([10.7760195, 106.6652137], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstanceRef.current);
        }

        return () => {
            // Cleanup
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    // Calculate distance between two coordinates using Haversine formula
    const calculateHaversineDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    };

    // Geocode address using Nominatim (OpenStreetMap)
    const geocodeAddress = async (address) => {
        try {
            // Chuẩn hóa địa chỉ trước khi search
            let searchQuery = address.trim();
            
            // Thử search với địa chỉ gốc + Vietnam
            if (!searchQuery.toLowerCase().includes('vietnam') && 
                !searchQuery.toLowerCase().includes('việt nam') &&
                !searchQuery.toLowerCase().includes('viet nam')) {
                searchQuery = searchQuery + ', Vietnam';
            }
            
            // Thử tìm với query đầy đủ
            let response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1&countrycodes=vn`,
                {
                    headers: {
                        'Accept-Language': 'vi,en'
                    }
                }
            );
            let data = await response.json();
            
            // Nếu không tìm thấy, thử với Ho Chi Minh City
            if (!data || data.length === 0) {
                const hcmQuery = searchQuery.replace(/vietnam/i, 'Ho Chi Minh City, Vietnam');
                response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(hcmQuery)}&limit=1&countrycodes=vn`,
                    {
                        headers: {
                            'Accept-Language': 'vi,en'
                        }
                    }
                );
                data = await response.json();
            }
            
            // Nếu vẫn không tìm thấy, thử bỏ số nhà và tìm tên đường
            if (!data || data.length === 0) {
                // Lấy phần tên đường (bỏ số nhà phía trước)
                const streetMatch = searchQuery.match(/[^\d,]+/);
                if (streetMatch) {
                    const streetQuery = streetMatch[0].trim() + ', Ho Chi Minh City, Vietnam';
                    response = await fetch(
                        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(streetQuery)}&limit=1&countrycodes=vn`,
                        {
                            headers: {
                                'Accept-Language': 'vi,en'
                            }
                        }
                    );
                    data = await response.json();
                }
            }
            
            if (data && data.length > 0) {
                return {
                    lat: parseFloat(data[0].lat),
                    lon: parseFloat(data[0].lon),
                    display_name: data[0].display_name
                };
            }
            return null;
        } catch (error) {
            console.error('Geocoding error:', error);
            return null;
        }
    };

    // Search address suggestions (for autocomplete)
    const searchAddressSuggestions = async (query) => {
        if (!query || query.length < 3) return [];
        
        try {
            let searchQuery = query;
            if (!query.toLowerCase().includes('vietnam') && !query.toLowerCase().includes('việt nam')) {
                searchQuery = query + ', Ho Chi Minh City, Vietnam';
            }
            
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=5&countrycodes=vn`
            );
            const data = await response.json();
            return data.map(item => ({
                display_name: item.display_name,
                lat: item.lat,
                lon: item.lon
            }));
        } catch (error) {
            console.error('Address search error:', error);
            return [];
        }
    };

    // Get route from OSRM (Open Source Routing Machine)
    const getRoute = async (fromCoords, toCoords) => {
        try {
            const response = await fetch(
                `https://router.project-osrm.org/route/v1/driving/${fromCoords.lon},${fromCoords.lat};${toCoords.lon},${toCoords.lat}?overview=full&geometries=geojson`
            );
            const data = await response.json();
            if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
                return data.routes[0];
            }
            return null;
        } catch (error) {
            console.error('Routing error:', error);
            return null;
        }
    };

    // Calculate distance and draw route
    const calculateDistance = async () => {
        if (!fromAddress || !toAddress) {
            alert('Vui lòng nhập địa chỉ đầy đủ');
            return;
        }

        setIsCalculating(true);

        // Clear existing markers and routes
        markers.forEach(marker => marker.remove());
        if (routeLayer) {
            routeLayer.remove();
        }

        // Geocode both addresses
        console.log('Tìm địa chỉ From:', fromAddress);
        const fromCoords = await geocodeAddress(fromAddress);
        
        if (!fromCoords) {
            // Nếu không tìm thấy From, dùng location mặc định (Đại học Sài Gòn)
            console.warn('Không tìm thấy địa chỉ From, dùng vị trí mặc định');
            const defaultFrom = {
                lat: 10.7622536,
                lon: 106.6824219,
                display_name: '273 An Dương Vương, Phường 3, Quận 5, TP. Hồ Chí Minh (Vị trí mặc định)'
            };
            
            console.log('Tìm địa chỉ To:', toAddress);
            const toCoords = await geocodeAddress(toAddress);
            
            if (!toCoords) {
                alert('Không thể tìm thấy địa chỉ giao hàng.\n\n📍 VÍ DỤ ĐỊA CHỈ HỢP LỆ:\n\n✅ 268 Lý Thường Kiệt, Quận 10, TP.HCM\n✅ Đại học Sài Gòn\n✅ Chợ Bến Thành\n✅ Lý Thường Kiệt, Q.10\n\n💡 Thử nhập địa chỉ đơn giản hơn hoặc dùng tên địa danh nổi tiếng.');
                setIsCalculating(false);
                return;
            }
            
            // Sử dụng location mặc định cho From
            await processRoute(defaultFrom, toCoords);
            setIsCalculating(false);
            return;
        }

        console.log('Tìm địa chỉ To:', toAddress);
        const toCoords = await geocodeAddress(toAddress);

        if (!toCoords) {
            alert('Không thể tìm thấy địa chỉ giao hàng.\n\n📍 VÍ DỤ ĐỊA CHỈ HỢP LỆ:\n\n✅ 268 Lý Thường Kiệt, Quận 10, TP.HCM\n✅ Đại học Sài Gòn\n✅ Chợ Bến Thành\n✅ Lý Thường Kiệt, Q.10\n\n💡 Thử:\n- Bỏ số nhà, chỉ nhập tên đường + quận\n- Dùng tên địa danh nổi tiếng gần nhà\n- Viết không dấu: "Ly Thuong Kiet, Quan 10"');
            setIsCalculating(false);
            return;
        }

        await processRoute(fromCoords, toCoords);
        setIsCalculating(false);
    };

    // Process route calculation and display
    const processRoute = async (fromCoords, toCoords) => {
        // Add markers
        const fromMarker = L.marker([fromCoords.lat, fromCoords.lon])
            .addTo(mapInstanceRef.current)
            .bindPopup('<b>From:</b><br>' + fromCoords.display_name);

        const toMarker = L.marker([toCoords.lat, toCoords.lon])
            .addTo(mapInstanceRef.current)
            .bindPopup('<b>To:</b><br>' + toCoords.display_name);

        setMarkers([fromMarker, toMarker]);

        // Get route
        const route = await getRoute(fromCoords, toCoords);
        let distance_km = 0;
        let duration_minutes = 0;

        if (route) {
            // Draw route on map
            const coordinates = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
            const polyline = L.polyline(coordinates, {
                color: 'blue',
                weight: 5,
                opacity: 0.7
            }).addTo(mapInstanceRef.current);

            setRouteLayer(polyline);

            // Get distance from route (in meters)
            distance_km = route.distance / 1000;
            duration_minutes = Math.round(route.duration / 60);

            // Fit map to show entire route
            mapInstanceRef.current.fitBounds(polyline.getBounds());
        } else {
            // Fallback to straight-line distance
            distance_km = calculateHaversineDistance(
                fromCoords.lat, fromCoords.lon,
                toCoords.lat, toCoords.lon
            );
            duration_minutes = Math.round(distance_km * 2); // Rough estimate: 30 km/h average

            // Fit map to show both markers
            const bounds = L.latLngBounds([
                [fromCoords.lat, fromCoords.lon],
                [toCoords.lat, toCoords.lon]
            ]);
            mapInstanceRef.current.fitBounds(bounds);
        }

        // Calculate shipping cost
        let shipping_cost = 0;
        if (distance_km <= 5) {
            shipping_cost = 5000;
        } else if (distance_km > 5 && distance_km <= 10) {
            shipping_cost = 10000;
        } else {
            shipping_cost = 15000;
        }

        // Update UI elements (same as Google Maps version)
        document.getElementById('result').classList.remove('hide');
        document.getElementById('in_kilo').innerHTML = distance_km.toFixed(2) + ' Km';
        document.getElementById('duration_text').innerHTML = duration_minutes + ' mins';
        document.getElementById('price_shipping').innerHTML = shipping_cost;
        document.getElementById('to_places').value = toCoords.display_name;
        document.getElementById('destination').value = toCoords.display_name;

        // Call callback if provided
        if (onDistanceCalculated) {
            onDistanceCalculated({
                distance: distance_km.toFixed(2),
                duration: duration_minutes + ' mins',
                price: shipping_cost,
                toAddress: toCoords.display_name
            });
        }
    };

    // Expose calculateDistance to parent
    useEffect(() => {
        window.calculateLeafletDistance = calculateDistance;
        window.searchAddressSuggestions = searchAddressSuggestions;
    }, [fromAddress, toAddress]);

    return (
        <div>
            <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
            {isCalculating && (
                <div style={{ 
                    textAlign: 'center', 
                    marginTop: '10px',
                    color: '#007bff',
                    fontWeight: 'bold' 
                }}>
                    <i className="fa fa-spinner fa-spin"></i> Đang tính toán khoảng cách...
                </div>
            )}
        </div>
    );
};

export default MapComponent;
