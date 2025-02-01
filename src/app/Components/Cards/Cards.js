"use client";
import React,{ useEffect } from "react";
import "./Cards.css";
import Link from "next/link";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library



export default function Cards() {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,  // Animation duration
      easing: 'ease',  // Animation easing
      once: true,      // Whether animation should happen once or every time it comes into view
    });
  }, []);

  return (
    <>
      <div className="unique-container1">
        <h4 className="title-card ms-3" data-aos="zoom-in-left">Joint Entrance Examination Testing</h4>
        <div className="unique-container" >
          <div className="unique-card" data-aos="fade-right" >
            <div className="unique-header" >
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                  alt="JEE Main Icon"
                />
              </div>
              <div className="unique-text">
                <h2>UPSC Civil Service</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <Link href={"/paperwise"}>
                <button className="unique-paper-btn">Paper Wise</button>
              </Link>
              <Link href={"/chapterwise"}>
                <button className="unique-chapter-btn">Chapter Wise</button>
              </Link>
            </div>
            <Link href={"/examgoal"}>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
            </Link>
            
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-down">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-left">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card " data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>{" "}
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <button className="unique-mock-btn">
              Take Mock Test or Practice
            </button>
          </div>
          <div className="unique-card" data-aos="fade-up">
            <div className="unique-header">
              <div className="unique-icon">
                <img
                  src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                  alt="JEE Advanced Icon"
                />
              </div>
              <div className="unique-text">
                <h2>JEE Advanced</h2>
                <p>Previous Years Questions with Solutions</p>
              </div>
            </div>
            <div className="unique-buttons">
              <button className="unique-paper-btn">Paper Wise</button>
              <button className="unique-chapter-btn">Chapter Wise</button>
            </div>
            <Link href={"/examgoal"}>
              <button className="unique-mock-btn">
                Take Mock Test or Practice
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
