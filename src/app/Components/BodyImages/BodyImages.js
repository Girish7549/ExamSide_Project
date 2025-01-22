"use client";
import React from 'react';
import './BodyImages.css'
 
const BodyImages = () => {
  return (
    <>
<div className="container">
  <div className="text-section">
    <h1>Never Stop <span className='Learning'>Learning.</span> Life <span>Never Stops</span> Teaching</h1>
    <p>Every teaching and learning journey is unique. Following, we'll help guide your way.</p>
    <button>Start Free Trial</button>
  </div>

  <div className="img-section">
    <img 
      src="https://skillgro.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner_img.598fbce3.png&w=1080&q=75" 
      alt="Featured"    
    />
  </div>
</div>

 
    </>
  );
};

// Only one default export in the module
export default BodyImages;
