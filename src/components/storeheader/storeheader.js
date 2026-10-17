// import React from 'react';
import "./storeheader.css";

const StoreHeader = () => {
    return (
        <div class="store-header">
            <img class="saber-logo" src="/images/saber-logo.png" alt="Saber Logo"/>
            <ul class="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="/store-catalog">Catalog</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
            </ul>
        </div>
    );
}

export default StoreHeader;