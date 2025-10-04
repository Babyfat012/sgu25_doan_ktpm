import React, { useState, useContext, useEffect } from 'react';
import {
    NavLink,
    Redirect
} from "react-router-dom";
import { AuthContext } from '../context/Auth'

function Menu() {
    const { user, jwt } = useContext(AuthContext);

    const [menu, setMenu] = useState([
        {
            item: "Dashboard",
            permission: "Admin"
        },
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
    return (
        <div>
            {
                jwt && user ?
                    (
                        <aside className="left-sidebar" data-sidebarbg="skin6">
                            <div className="scroll-sidebar" data-sidebarbg="skin6">
                                <nav className="sidebar-nav">
                                    <ul id="sidebarnav">

                                        <li className="list-divider"></li>

                                        <li className="nav-small-cap"><span className="hide-menu">Components</span></li>


                                        <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="#"
                                            aria-expanded="false"><i data-feather="grid" className="feather-icon"></i><span
                                                className="hide-menu">Tables </span></a>
                                            <ul aria-expanded="false" className="collapse  first-level base-level-line">
                                                {
                                                    menu && menu.map((item, index) => (
                                                        (
                                                            <li className="sidebar-item active" key={index}>
                                                                {
                                                                    item.permission === user.id_permission.permission ?
                                                                        (
                                                                            <NavLink to={"/" + item.item.toLowerCase()} className="sidebar-link">
                                                                                {item.item}
                                                                            </NavLink>
                                                                        ) :
                                                                        (
                                                                            <div></div>
                                                                        )
                                                                }
                                                            </li>
                                                        )
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                    ) :
                    (
                        <Redirect to="/" />
                    )
            }
        </div>


    );
}

export default Menu;