import React from 'react';
import './Event.css'

function DetailEvent(props) {

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
                <h1 className="h4_event">SỰ KIỆN ĐẶC BIỆT CÙNG FEAR OF GOD!!!</h1>
                <div style={{ marginTop: '2rem' }}>
                    <a className="a_event">Khuyến mãi</a>
                </div>
                <div style={{ marginTop: '2rem'}}>
                    <span style={{ fontSize: '1.2rem', color: '#646464', fontWeight: 'bold' }}>Trải nghiệm mua sắm tuyệt vời tại FEAR OF GOD!!!</span>
                    <br />
                    <span style={{ fontSize: '1.05rem' }}>Hãy ghé thăm FEAR OF GOD để khám phá bộ sưu tập thời trang đa dạng và chất lượng cao!</span>
                    <br />
                    <span style={{ fontSize: '1.05rem'}}>Đừng bỏ lỡ cơ hội sở hữu những sản phẩm thời trang độc đáo.</span>
                </div>
                <div style={{ padding: '3rem 0' }}>
                    <img style={{ width: '100%' }} src="https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(2).jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default DetailEvent;