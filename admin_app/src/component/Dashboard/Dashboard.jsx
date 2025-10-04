import React from 'react';

function Dashboard() {
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Dashboard - Trang Chủ Admin</h4>
                                <p className="card-subtitle">Chào mừng bạn đến với trang quản trị!</p>
                                
                                <div className="row mt-4">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Sản phẩm
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            <i className="fas fa-box text-primary"></i> Quản lý sản phẩm
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card border-left-success shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            Đơn hàng
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            <i className="fas fa-shopping-cart text-success"></i> Quản lý đơn hàng
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card border-left-info shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                                            Khách hàng
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            <i className="fas fa-users text-info"></i> Quản lý khách hàng
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6">
                                        <div className="card border-left-warning shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                            Khuyến mãi
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                            <i className="fas fa-gift text-warning"></i> Quản lý sale & coupon
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0">Chức năng nhanh</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h6>Quản lý sản phẩm</h6>
                                                        <ul className="list-unstyled">
                                                            <li><a href="/product" className="text-decoration-none">📦 Danh sách sản phẩm</a></li>
                                                            <li><a href="/product/create" className="text-decoration-none">➕ Thêm sản phẩm mới</a></li>
                                                            <li><a href="/category" className="text-decoration-none">📂 Quản lý danh mục</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h6>Quản lý bán hàng</h6>
                                                        <ul className="list-unstyled">
                                                            <li><a href="/order" className="text-decoration-none">🛒 Đơn hàng</a></li>
                                                            <li><a href="/coupon" className="text-decoration-none">🎟️ Mã giảm giá</a></li>
                                                            <li><a href="/sale" className="text-decoration-none">🏷️ Khuyến mãi</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center text-muted">
                All Rights Reserved by Adminmart. Designed and Developed by <a
                    href="https://www.facebook.com/KimTien.9920/">Tiền Kim</a>.
            </footer>
        </div>
    );
}

export default Dashboard;