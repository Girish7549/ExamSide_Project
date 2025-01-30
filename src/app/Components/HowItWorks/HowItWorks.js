import React, { useEffect } from 'react';
import "./HowItWorks.css";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

export default function HowItWorks() {
  
  useEffect(() => {
      AOS.init({
        duration: 1000,  // Animation duration
        easing: 'ease',  // Animation easing
        once: true,      // Whether animation should happen once or every time it comes into view
      });
    }, []);

  return (
    <div className="bizgurukul-container">
      <h1 className="bizgurukul-title">
        How Bizgurukul <span className="bizgurukul-highlight">works</span>
      </h1>
      

      <div className="bizgurukul-steps">
        {/* Step 1 */}
        <div className="bizgurukul-step explore-step" data-aos="flip-up">
          <img
            src="https://www.bizgurukul.com/Biz/img/biz_image/explore.svg"
            alt="Explore"
          />
          <div className="bizgurukul-step-content">
            <h2 className="bizgurukul-step-title">Explore</h2>
            <p className="bizgurukul-step-description">
              Different courses and trending skills. Explore the million
              possibilities of getting in touch with all the trending skills in
              the market.
            </p>
          </div>
        </div>

        {/* Curved Arrow 1 */}
        {/* <img className="bizgurukul-arrow arrow-1" src={arrow} alt="Arrow" /> */}

        {/* Step 2 */}
        <div className="bizgurukul-step learn-step" data-aos="zoom-in-down">
          <img
            src="https://www.bizgurukul.com/Biz/img/biz_image/learn.svg"
            alt="Learn"
          />
          <div className="bizgurukul-step-content">
            <h2 className="bizgurukul-step-title">Learn</h2>
            <p className="bizgurukul-step-description">
              From the best of mentors. Learn from mentors who have real-time
              expertise in their respective fields.
            </p>
          </div>
        </div>

        {/* Curved Arrow 2 */}
        {/* <img className="bizgurukul-arrow arrow-2" src={arrow} alt="Arrow" /> */}

        {/* Step 3 */}
        <div className="bizgurukul-step inspire-step" data-aos="flip-down">
          <img
            src="https://www.bizgurukul.com/Biz/img/biz_image/inspire.svg"
            alt="Inspire"
          />
          <div className="bizgurukul-step-content">
            <h2 className="bizgurukul-step-title">Inspire</h2>
            <p className="bizgurukul-step-description">
              The world around you. Inspire people close to you and help make a
              tangible difference in society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
