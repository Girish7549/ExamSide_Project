import React, { useEffect } from 'react';
import './Footers.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

export default function Footers() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease',  // Animation easing
      once: true,      // Whether animation should happen once or every time it comes into view
    });
  }, []);

  return (
   <>
    <footer className="footer" data-aos="zoom-in">
    <div className="footer-container">
       
      <div className="footer-section about">
        <h2 className="footer-logo">Education</h2>
        <p className="tagline">Grow Your Skills</p>
        <p className="description">When an unknown printer took galley of type and scrambled it to make specimen bookt has.</p>
        <p className="address">
          463 7th Ave, NY 10018, USA<br/>
          +123 88 9900 456
        </p>
      </div>

      
      <div className="footer-section useful-links">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="#">Our values</a></li>
          <li><a href="#">Our advisory board</a></li>
          <li><a href="#">Our partners</a></li>
          <li><a href="#">Become a partner</a></li>
          <li><a href="#">Work at Future Learn</a></li>
          <li><a href="#">Quizlet Plus</a></li>
        </ul>
      </div>

      
      <div className="footer-section company">
        <h3>Our Company</h3>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Become Teacher</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Instructor</a></li>
          <li><a href="#">Events</a></li>
        </ul>
      </div>

       
      <div className="footer-section get-in-touch">
        <h3>Get In Touch</h3>
        <p className="contact-text">When an unknown printer took galley type and scrambled</p>
        <div className="social-icons">
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook"/></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter"/></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram"/></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube"/></a>
        </div>
        <div className="app-buttons">
          <a href="#" className="google-play">Get it on Google Play</a>
          <a href="#" className="apple-store">Download on the Apple Store</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2010-2024 skillgro.com. All rights reserved.</p>
      <div className="policy-links">
        <a href="#">Term of Use</a> | <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
   </>
  )
}
