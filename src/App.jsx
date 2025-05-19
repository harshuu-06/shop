import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components for different routes
import TopRated from './components/TopRated';
import KidsWear from './components/KidsWear';
import MensWear from './components/MensWear';
import Electronics from './components/Electronics';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Router>
        <Navbar handleOrderPopup={handleOrderPopup} />

        {/* Define Routes */}
        <Routes>
          {/* Home Page (Your Current Layout) */}
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Banner />
                <Subscribe />
                <Testimonials />
                <Footer />
              </>
            }
          />

          {/* Other pages */}
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/kids-wear" element={<KidsWear />} />
          <Route path="/mens-wear" element={<MensWear />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>

        {/* Popup is outside Routes so it's always accessible */}
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </Router>
    </div>
  );
};

export default App;
