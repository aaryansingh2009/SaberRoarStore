// import React from 'react';
import "./storefooter.css";

const StoreFooter = () => {
    return (    
        <footer className="store-footer">
            <div className="footer-inner">
                <div className="footer-content">
                    <section className="footer-column">
                        <h2>Get in touch</h2>
                        <a href="mailto:jennifer.dames@franklin.k12.wi.us">
                            jennifer.dames@franklin.k12.wi.us
                        </a>
                        <p className="footer-credit">
                            Powered by the members of the FHS STEM Club:
                            <br />
                            Aaryan S, Aayush S, Adhvik R, and Soham S
                        </p>
                    </section>

                    <section className="footer-column">
                        <h2>Follow along</h2>
                        <a href="https://www.instagram.com/roarstorefranklin/" target="_blank" rel="noreferrer">
                            @roarstorefranklin <span aria-hidden="true">↗</span>
                        </a>
                        <p>See what’s new at the Roar Store.</p>
                    </section>

                    <section className="footer-column">
                        <h2>Visit us</h2>
                        <address>
                            Franklin High School
                            <br />
                            8222 South 51st Street
                            <br />
                            Franklin, WI 53132
                        </address>
                    </section>
                </div>
                <div className="footer-bottom">
                    <span>Saber Roar Store</span>
                    <span>&copy; 2026 Saber Roar Store. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default StoreFooter;