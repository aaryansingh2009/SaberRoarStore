// import React from 'react';
import './homepage.css';

import Header from '../storeheader/storeheader';
import Footer from '../storefooter/storefooter';

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="homepage">
            <h1>Welcome to Our Store</h1>
            <p>Discover the best products at unbeatable prices!</p>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;