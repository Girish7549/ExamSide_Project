import React from 'react'
import './HowItWorks.css'
export default function HowItWorks() {
  return (
    <>
     <div class="container">
        <h1 class="title">How Bizgurukul <span class="highlight">works</span></h1>
        <div class="steps">
            <div class="line"></div>
            <div class="step">
                <img src="https://www.bizgurukul.com/Biz/img/biz_image/explore.svg" alt="Explore"/>
                <div class="step-content">
                    <h2 class="step-title">Explore</h2>
                    <p class="step-description">Different courses and trending skills. Explore the million possibilities of getting in touch with all the trending skills in the market!</p>
                </div>
            </div>
            <div class="step">
                <img src="https://www.bizgurukul.com/Biz/img/biz_image/learn.svg" alt="Learn"/>
                <div class="step-content">
                    <h2 class="step-title">Learn</h2>
                    <p class="step-description">From the best of mentors. Learn from mentors who have real-time expertise in their respective fields.</p>
                </div>
            </div>
            <div class="step">
                <img src="https://www.bizgurukul.com/Biz/img/biz_image/inspire.svg" alt="Inspire"/>
                <div class="step-content">
                    <h2 class="step-title">Inspire</h2>
                    <p class="step-description">The world around you. Inspire people close to you and help make a tangible difference in society.</p>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
