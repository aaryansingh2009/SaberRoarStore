// import React from 'react';
import "./storefooter.css";

const StoreFooter = () => {
    return (    
        <div className="store-footer">
            <footer>
                <div  id="footer-content" class="row">
                    <div class="column">
                        <h3>Contact Us</h3>
                        <p>Email: jennifer.dames@franklin.k12.wi.us</p>
                        <br />
                        <br />
                        <p>Powered by the Members of FHS STEM Club Aaryan S, Aayush S, Adhvik R, Soham S </p>
                    </div>
                    
                    <div class="column">
                        <h3>Social Media</h3>
                        <p>Instagram: @roarstorefranklin</p>
                    </div>

                    <div class="column">
                        <h3>Location</h3>
                        <p>Franklin High School</p>
                        <p>8222 South 51st Street</p>
                        <p>Franklin, WI 53132</p>
                    </div>
                </div>
                <p>Saber Roar Store<br></br>
                    &copy; 2026 Saber Roar Store. All Rights Reserved.
                </p>
            </footer>    
        </div>
    );
}

export default StoreFooter;