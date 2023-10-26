import React from 'react';
import './Footer.css'

// Define the Footer component
const Footer = () => {
  return (
    <footer className='footer-style'>
      {/* Footer content divided into four columns */}
      <div className='row fst'>
        <div className='col-lg-3 col-md-6 col-sm-6 '>
          <div className='mx-5'>
            <h5>Women</h5>
            <ul>
              <li>Dresses</li>
              <li>Pants</li>
              <li>Skirts</li>
            </ul>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
          <h5>Men</h5>
          <ul>
            <li>Dresses</li>
            <li>Pants</li>
            <li>Shirts</li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
          <h5>Kids</h5>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6'>
          <h5>Links</h5>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
      <hr />
      {/* Copyright notice */}
      <p className="text-center mb-0">
        &copy; 2023 SwiftCart. All rights reserved.
      </p>
    </footer>
  );
}

// Export the Footer component for use in other parts of the application
export default Footer;
