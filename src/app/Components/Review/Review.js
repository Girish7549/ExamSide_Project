import React, { useEffect } from 'react'
import './Review.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

export default function Review() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease',  // Animation easing
      once: true,      // Whether animation should happen once or every time it comes into view
    });
  }, []);

  return (
    <>
      <section className="review-section" data-aos="zoom-in-up">
        <h2>What Our Customers Say</h2>
        <div className="review-container">
          <div className="review-card">
            <div className="review-header">
              <div className="profile-pic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s" alt="User 1" />
              </div>
              <div className="user-name">John Doe</div>
            </div>
            <div className="rating">★★★★★</div>
            <p className="review-text">
              "The service was excellent! I loved how quickly they responded and the quality of their work. Highly recommend."
            </p>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="profile-pic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s" alt="User 2" />
              </div>
              <div className="user-name">Jane Smith</div>
            </div>
            <div className="rating">★★★★☆</div>
            <p className="review-text">
              "Great experience overall. There were a few minor delays, but the team handled everything professionally."
            </p>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="profile-pic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s" alt="User 3" />
              </div>
              <div className="user-name">Michael Brown</div>
            </div>
            <div className="rating">★★★★★</div>
            <p className="review-text">
              "Amazing! The quality exceeded my expectations. I'll definitely use their service again."
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
