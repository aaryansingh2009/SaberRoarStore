import './contactpage.css';

import StoreHeader from '../storeheader/storeheader';
import StoreFooter from '../storefooter/storefooter';

const ContactPage = () => {
  return (
    <div>
      <StoreHeader />
        <div className="contact-page">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out and let us know how we can help.</p>
        </div>
      <StoreFooter />
    </div>
  );
};

export default ContactPage;
