
import './contactpage.css';

import StoreHeader from '../storeheader/storeheader';
import StoreFooter from '../storefooter/storefooter';
// import { QRCodeSVG } from 'qrcode.react';

// Replace this with your real Square Store URL
const SQUARE_URL = 'https://YOUR-STORE.square.site';

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <StoreHeader />

      <main className="contact-page">
        <section className="contact-heading">
          <span className="contact-eyebrow">WE'RE HERE TO HELP</span>
          <h1>Contact Us</h1>
        </section>

        <section className="square-card">
          <div className="square-info">
            <div className="square-brand">
              <span className="square-icon">▪</span>
              <span>Square</span>
            </div>

            <h2>Shop the Roar Store</h2>
            <p>
              Browse our Products and Complete your Purchase
              securely through our Square storefront.
            </p>

            <a
              className="square-link"
              href={SQUARE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visit Our Square Store</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="square-divider" />

          <div className="qr-section">
            <div className="qr-frame">
              <p>QR Code Goes Here</p>
            </div>

            <h3>Scan to Shop</h3>
            <p>
              Open your phone's camera and scan the QR code
              to visit our Store.
            </p>
          </div>
        </section>

        <section className="contact-help">
          <h2>Fill out our Review Form</h2>
          <p>
            Have a Question about an Order or a Product?
            Have a Suggestion for our Store?
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-YJqlJgn-zm0ydW5B4YMewYrfPFXQHUywjwCZ1N1eFjtQGA/viewform" target="_blank">
            Fill out our Review Form!!
          </a>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
};

export default ContactPage;