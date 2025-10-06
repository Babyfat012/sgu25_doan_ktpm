import React from 'react';
import './Event.css'

function Event(props) {

    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Event</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '3rem' }}>
                <div className="text-center" style={{ padding: '4rem 2rem' }}>
                    <h2>Sự Kiện Đặc Biệt</h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '2rem' }}>
                        Chúng tôi đang chuẩn bị những sự kiện đặc biệt dành cho bạn!
                    </p>
                    <p style={{ fontSize: '1rem', color: '#999' }}>
                        Hãy theo dõi để không bỏ lỡ những ưu đãi hấp dẫn.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Event;