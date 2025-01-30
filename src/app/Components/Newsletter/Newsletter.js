import React, { useEffect } from 'react'
import './Newsletter.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

export default function Newsletter() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease',  // Animation easing
      once: true,      // Whether animation should happen once or every time it comes into view
    });
  }, []);


  return (
    <>
      <div className="subscription-container button-color">
        <div className="subscription-content">
          <h2 data-aos="fade-right">
            Want To Stay <span>Informed</span> About New <span>Courses & Study</span>?
          </h2>
          <div className="subscription-form" data-aos="fade-left">
            <input type="email" placeholder="Type Your E-Mail" />
            <button>Subscribe Now</button>
          </div>
        </div>
        <div className="subscription-image" data-aos="flip-left">
          <img src="https://skillgro.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewsletter_img.a1a0cec0.png&w=384&q=75" alt="Person Holding a Bag" />
        </div>
        <div className="background-pattern"></div>
      </div>


    </>
  )
}
