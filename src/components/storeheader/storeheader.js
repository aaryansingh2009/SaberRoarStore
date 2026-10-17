// import React from 'react';
import "./storeheader.css";

const StoreHeader = () => {
    return (
        <div class="store-header">
            <div class="roar-store-logo">
                <a href="/">
                    <img class="saber-logo" src="/images/roarheader.png" alt="Saber Logo"/>
                </a>
            </div>
            <ul class="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="/store-catalog">Catalog</a></li>
                <li><a href="/contact-us">Contact Us/Shop</a></li>
            </ul>
        </div>
    );
}

export default StoreHeader;