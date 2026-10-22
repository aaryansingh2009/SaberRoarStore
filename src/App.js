import './App.css';

import Header from './components/storeheader/storeheader';
import Footer from './components/storefooter/storefooter';
// import StoreCatalog from './components/storecatalog/storecatalog';
import HomePage from './components/homepage/homepage';
// import ContactPage from './components/contactpage/contactpage';
// import Carousel from './components/carousel/carousel';
// import AboutUs from './components/aboutus/aboutus';
import AboutUs2 from './components/aboutus2/aboutus2';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <Carousel /> */}
      {/* <StoreCatalog />
      <ContactPage /> */}
      <AboutUs2 />
      <Footer />
    </div>
  );
}

export default App;
