import React, { useState, useContext } from 'react';
import {
    NavLink,
    Redirect
} from "react-router-dom";
import { AuthContext } from '../context/Auth'

function Menu() {
    const { user, jwt } = useContext(AuthContext);

    const [menu, setMenu] = useState([
        {
            item: "Customer",
            permission: "Admin"
        },
        {
            item: "Coupon",
            permission: "Admin"
        },
        {
            item: "Product",
            permission: "Admin"
        },
        {
            item: "Sale",
            permission: "Admin"
        },
        {
            item: "Category",
            permission: "Admin"
        },
        {
            item: "Order",
            permission: "Admin"
        },
        {
            item: "ConfirmOrder",
            permission: "Admin"
        },
        {
            item: "Delivery",
            permission: "Admin"
        },
        {
            item: "ConfirmDelivery",
            permission: "Admin"
        },
        {
            item: "CompletedOrder",
            permission: "Admin"
        },
        {
            item: "CancelOrder",
            permission: "Admin"
        },
        {
            item: "User",
            permission: "Admin"
        },
        {
            item: "Permission",
            permission: "Admin"
        }
    ])

    let { pathname } = window.location;

    // Nếu chưa login thì redirect
    if (!jwt || !user) {
        return <Redirect to="/" />;
    }

    // Nếu không phải Admin thì cũng redirect (chặn login admin)
    if (user.id_permission.permission !== "Admin") {
        return <Redirect to="/" />;
    }

    // Nếu là Admin thì hiển thị toàn bộ menu
    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar" data-sidebarbg="skin6">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="list-divider"></li>
                        <li className="nav-small-cap"><span className="hide-menu">Management</span></li>

                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow" href="#" onClick={(e) => e.preventDefault()}
                                aria-expanded="false"><i data-feather="grid" className="feather-icon"></i>
                                <span className="hide-menu">Menu Quản Lý</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level base-level-line">
                                {menu.map((item, index) => (
                                    <li className="sidebar-item" key={index}>
                                        <NavLink 
                                            to={"/" + item.item.toLowerCase()} 
                                            className="sidebar-link"
                                            activeClassName="active"
                                        >
                                            <span className="hide-menu">{item.item}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Menu;
