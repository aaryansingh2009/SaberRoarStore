import React from 'react';
import './homepage.css';


// import AboutUs from '../aboutus/aboutus';
// import '../aboutus/aboutus.css';

const Homepage = () => {
    return (
        <div>
            {/* // Text on the homepage background */}
            <section id="storehome" className="cs-section">
                <div className="cs-container">
                    <div className="cs-content">
                        <h1 className="cs-title">Come shop and visit us at our Franklin High School Saber Roar Store</h1>
                        <h4 className="cs-item-text-hours">Store Hours:</h4>
                        <p className="cs-item-text-hours">
                            &emsp; &emsp; Monday - Friday: 7:00 AM - 7:15 AM<br />
                            &emsp; &emsp; Monday - Wednesday: 2:35 PM - 3:00 PM <br />
                            &emsp; &emsp; Friday: 2:35 PM - 3:00 PM <br />

                            {/* Basic one */}
                            {/* &emsp; &emsp; Monday: 2:30 PM - 3:30 PM <br />
                            &emsp; &emsp; Tuesday: 2:30 PM - 3:30 PM <br />
                            &emsp; &emsp; Wednesday: 2:30 PM - 3:30 PM <br />
                            &emsp; &emsp; Thursday: 2:30 PM - 3:30 PM <br />
                            &emsp; &emsp; Friday - Sunday: Closed <br /> */}
                        </p>
                        <br />
                        {/* <a href="/get-started" target="_blank" className="cs-button-solid">Visit Store</a> */}
                        <br />
                    </div>
                </div>

                <ul className="cs-card-group">
                        <li className="cs-item">
                            {/* <img className="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/check-circle.svg" alt="icon" width="48" height="48"></img> */}
                            <span className="cs-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                </svg>
                            </span>
                            <h3 className="cs-h3">Store</h3>
                            <p className="cs-item-text">
                                Visit our Saber Roar Store to explore a variety of products and merchandise. From apparel to accessories, we have something for everyone.
                            </p>
                            <br />
                            <a href="/store-products" className="cs-button-solid">Visit Store</a>
                        </li>
                        <li className="cs-item">
                            <span className="cs-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="4    6" fill="currentColor" className="bi bi-question-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>
                            </span>
                            {/* <img className="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/speedometer.svg" alt="icon" width="48" height="48"></img> */}
                            <h3 className="cs-h3">Contact Us / Requests</h3>
                            <p className="cs-item-text">
                                Have questions or special requests? Reach out to us through our contact page, and we'll be happy to assist you with any inquiries or custom orders.
                            </p>
                            <br />
                            <a href="/contact-us" className="cs-button-solid">Contact Us</a>
                        </li>
                    </ul>

                {/* Background image for the homepage */}
                <picture className="cs-background">
                    <source media="(max-width: 300px)" srcSet="/images/home-page.png"></source>
                    <source media="(min-width: 301px)" srcSet="/images/home-page.png"></source>
                    <img decoding="async" src="/images/home-page.png" alt="Roar Store" width="2250" height="1500" aria-hidden="true"></img>
                </picture>

            </section>
            {/* <div className="about-us-container">
                <AboutUs />
            </div> */}
        </div>
        
                                
    );
};
export default Homepage;