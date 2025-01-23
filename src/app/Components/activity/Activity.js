import React from 'react';
import './Activity.css';

export default function Activity() {
  return (
    <>
      <div className="stats-section button-color">
        <div className="stat-item">
          <h2>45K+</h2>
          <p>Active Students</p>
        </div>
        <div className="stat-item">
          <h2>89+</h2>
          <p>Faculty Courses</p>
        </div>
        <div className="stat-item">
          <h2>156K</h2>
          <p>Best Professors</p>
        </div>
        <div className="stat-item">
          <h2>42K</h2>
          <p>Award Achieved</p>
        </div>
      </div>

      <section className="journey-section button-color">
        <h2 className="journey-header">Start Your Learning Journey Today!</h2>
        <p className="journey-description">
          Groove's intuitive shared inbox makes team members together organize, prioritize, and collaborate effectively.
        </p>
        <div className="journey-cards">
          <div className="journey-card">
            <img className="journey-card-icon" src="https://img.icons8.com/ios-filled/50/ffffff/teamwork.png" alt="Learn with Experts" />
            <h3 className="journey-card-title">Learn with Experts</h3>
            <p className="journey-card-text">Curate and share Pluralsight content to reach your goals.</p>
          </div>
          <div className="journey-card">
            <img className="journey-card-icon" src="https://img.icons8.com/ios-filled/50/ffffff/training.png" alt="Learn Anything" />
            <h3 className="journey-card-title">Learn Anything</h3>
            <p className="journey-card-text">Access world-class learning content for all your needs.</p>
          </div>
          <div className="journey-card">
            <img className="journey-card-icon" src="https://img.icons8.com/ios-filled/50/ffffff/certificate.png" alt="Get Online Certificate" />
            <h3 className="journey-card-title">Get Online Certificate</h3>
            <p className="journey-card-text">Earn certificates to showcase your achievements online.</p>
          </div>
          <div className="journey-card">
            <img className="journey-card-icon" src="https://img.icons8.com/ios-filled/50/ffffff/email.png" alt="E-mail Marketing" />
            <h3 className="journey-card-title">E-mail Marketing</h3>
            <p className="journey-card-text">Master tools to communicate effectively with audiences.</p>
          </div>
        </div>
      </section>
    </>
  );
}
