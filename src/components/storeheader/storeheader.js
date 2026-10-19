// import React from 'react';
import { NavLink } from "react-router-dom";
import "./storeheader.css";

const StoreHeader = () => {
    return (
        <div className="store-header">
            <div className="roar-store-logo">
                <a href="/">
                    <img className="saber-logo" src="/images/roarheader.png" alt="Saber Logo"/>
                </a>
            </div>
            <ul className="navbar">
                <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/store-products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink></li>
                <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? "active" : ""}>Contact Us/Shop</NavLink></li>
            </ul>
        </div>
    );
}

export default StoreHeader;