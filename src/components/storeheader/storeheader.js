// import React from 'react';
import { NavLink } from "react-router-dom";
import "./storeheader.css";

const StoreHeader = () => {
    return (
        <header className="store-header">
            <div className="roar-store-logo">
                <NavLink to="/" aria-label="Saber Roar Store home">
                    <img className="saber-logo" src="/images/roarheader.png" alt="Saber Logo"/>
                </NavLink>
            </div>
            <nav aria-label="Main navigation">
            <ul className="store-nav">
                <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/store-products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink></li>
                <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? "active" : ""}>Contact Us/Shop</NavLink></li>
            </ul>
            </nav>
        </header>
    );
}

export default StoreHeader;