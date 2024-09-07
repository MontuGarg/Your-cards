import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a company dedicated to providing the best products and services to our customers.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 1234 Street Name, City, State, 56789</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
