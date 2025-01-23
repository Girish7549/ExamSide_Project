"use client";
import React from "react";
import "./BodyMarquee.css";

const BodyMarquee = () => {
  const logos = [
    "https://www.bizgurukul.com/Biz/img/biz_image/Zomato_Logo.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/vivo-1.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/tata-aig-seeklogo.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/flydocs-brand.b6e935.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/Wipro_Primary%20Logo_Color_RGB.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/deloitte.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/Accenture.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/Tata-Motors-logo.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/sonataLogo.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/Logo_for_Maruti_Suzuki.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/kotak-logo-fb.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/livspace.458227b.svg",
    "https://www.bizgurukul.com/Biz/img/biz_image/genpact.svg",
    // Add more logos as needed
  ];

  return (
    <div className="mark_main_card">
      <div className="mark_card">
        <div className="logo_slide">
          {/* Concatenate the logos array to repeat the logos for a smooth scrolling effect */}
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt={`Company Logo ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyMarquee;
