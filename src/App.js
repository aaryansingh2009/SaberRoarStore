import './App.css';

import Header from './components/storeheader/storeheader';
import Footer from './components/storefooter/storefooter';
import StoreCatalog from './components/storecatalog/storecatalog';
import HomePage from './components/homepage/homepage';
import ContactPage from './components/contactpage/contactpage';
import Carousel from './components/carousel/carousel';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <Carousel /> */}
      {/* <StoreCatalog />
      <ContactPage /> */}
      <Footer />
    </div>
  );
}

export default App;
