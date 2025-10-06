import React from 'react';
import PropTypes from 'prop-types';

Favorite.propTypes = {

};

function Favorite(props) {
    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Wishlist</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="wishlist-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="li-product-remove">remove</th>
                                                <th className="li-product-thumbnail">images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="li-product-price">Unit Price</th>
                                                <th className="li-product-stock-status">Stock Status</th>
                                                <th className="li-product-add-cart">add to cart</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="li-product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                                <td className="li-product-thumbnail"><a href="#"><img src="images/wishlist-thumb/1.jpg" alt="" /></a></td>
                                                <td className="li-product-name"><a href="#">Giro Civilia</a></td>
                                                <td className="li-product-price"><span className="amount">$23.39</span></td>
                                                <td className="li-product-stock-status"><span className="in-stock">in stock</span></td>
                                                <td className="li-product-add-cart"><a href="#">add to cart</a></td>
                                            </tr>
                                            <tr>
                                                <td className="li-product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                                <td className="li-product-thumbnail"><a href="#"><img src="images/wishlist-thumb/2.jpg" alt="" /></a></td>
                                                <td className="li-product-name"><a href="#">Pro Bike Shoes</a></td>
                                                <td className="li-product-price"><span className="amount">$30.50</span></td>
                                                <td className="li-product-stock-status"><span className="in-stock">in stock</span></td>
                                                <td className="li-product-add-cart"><a href="#">add to cart</a></td>
                                            </tr>
                                            <tr>
                                                <td className="li-product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                                                <td className="li-product-thumbnail"><a href="#"><img src="images/wishlist-thumb/3.jpg" alt="" /></a></td>
                                                <td className="li-product-name"><a href="#">Nero Urban Shoes</a></td>
                                                <td className="li-product-price"><span className="amount">$40.19</span></td>
                                                <td className="li-product-stock-status"><span className="out-stock">out stock</span></td>
                                                <td className="li-product-add-cart"><a href="#">add to cart</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favorite;