// import React from 'react';
import "./storecatalog.css";

import Header from '../storeheader/storeheader';
import Footer from '../storefooter/storefooter';

const StoreCatalog = () => {
    return (
        <div>
            <Header />
            <div className="store-catalog">
                <h1>Store Catalog</h1>
                <p>Browse our wide selection of products and find what you need!</p>
            </div>
            <Footer />
        </div>
    );
}

export default StoreCatalog;