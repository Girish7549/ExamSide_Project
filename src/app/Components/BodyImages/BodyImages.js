"use client";
import React from "react";
import "./BodyImages.css";

const BodyImages = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-evenly align-content-center p-3">
        <div className="text-section mt-5">
          <h1 className="">
            Never Stop <span className="Learning">Learning</span>. Life{" "}
            <span>Never Stop Teaching</span>
          </h1>
          <p>
            Every teaching and learning journey is unique. Following, we'll help
            guide your way.
          </p>
          <button className="button-color">Start Free Trial</button>
        </div>

        <div className="img-section me-5">
          <div className="img-wrapper">
            <img
              className="image1"
              src="https://skillgro.netlify.app/_next/static/media/bg_dots.43404794.svg"
              alt="Background Dots"
            />
          </div>

          <div className="img-wrapper">
            <img
              className="image3"
              src="https://html.themegenix.com/skillgro/assets/img/banner/banner_shape02.png"
              alt="Shape 2"
            />
          </div>
          <div className="img-wrapper">
            <img
              className="image2"
              src="https://html.themegenix.com/skillgro/assets/img/banner/banner_shape01.png"
              alt="Shape 1"
            />
          </div>
          <div className="img-wrapper">
            <img
              className="image4"
              src="https://skillgro.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner_img.598fbce3.png&w=1080&q=75"
              alt="Main Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyImages;
