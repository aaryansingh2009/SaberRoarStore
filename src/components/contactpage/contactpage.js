import './contactpage.css';

import Header from '../storeheader/storeheader';
import Footer from '../storefooter/storefooter';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Reach out and let us know how we can help.</p>
      <Footer />
    </div>
  );
};

export default ContactPage;
