import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeCover from './components/HomeCover';
import Slider from './components/Slider';

// Define the Home component
const Home = () => {
  return (
    <div className="home">
      {/* Include the Header component */}
      <Header />

      {/* Include the HomeCover component */}
      <HomeCover />

      {/* Include the Slider component */}
      <Slider />

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

// Export the Home component for use in other parts of the application
export default Home;
