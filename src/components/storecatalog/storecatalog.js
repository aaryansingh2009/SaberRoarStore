// import React from 'react';
import "./storecatalog.css";

import StoreHeader from '../storeheader/storeheader';
import StoreFooter from '../storefooter/storefooter';

const StoreCatalog = () => {
    return (
        <div>
            <StoreHeader />
            <div className="store-catalog">
                <h1>Store Catalog</h1>
                <p>Browse our wide selection of products and find what you need!</p>
            </div>
            <StoreFooter />
        </div>
    );
}

export default StoreCatalog;