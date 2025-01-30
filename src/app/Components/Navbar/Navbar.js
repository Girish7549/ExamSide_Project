import React, { useEffect } from "react";
import './Navbar.css';
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

export default function Navbar() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease',  // Animation easing
      once: true,      // Whether animation should happen once or every time it comes into view
    });
  }, []);


  return (
    <>
      <header id="navb" className="nav">
        <div data-aos="zoom-in-right">
          <Link href={"/"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPa7xUg01XNO3nPMzTKzq6Y7UUzo6wP2ZfIRDVZdaLxjxKTy29wDFTcADnIgHw-Wo1Obw&usqp=CAU"
              alt="Logo"
              className="logo"
            />
          </Link>
        </div>
        <div className="navbar">
          <ul>
            <li className="dropdown">
              <span className="hoo fw-bold">Join Entrance <IoIosArrowDown /></span>
              <div className="dropdown-content ">
                <div className="d-flex justify-content-center align-items-center gap-4">
                  <div className="dropdown-column">
                    <h6 className="text-nowrap fw-bold">JEE Main</h6>
                    <a href="#">Physics</a>
                    <a href="#">Chemistry</a>
                    <a href="#">Jackets</a>
                  </div>
                  <div className="dropdown-column">
                    <h6 className="text-nowrap  fw-bold">JEE Advanced</h6>
                    <a href="#">Physics</a>
                    <a href="#">Chemistry</a>
                    <a href="#">Jackets</a>
                  </div>
                  <div className="dropdown-column">
                    <h6 className="text-nowrap fw-bold">WB JEE</h6>
                    <a href="#">Physics</a>
                    <a href="#">Chemistry</a>
                    <a href="#">Jackets</a>
                  </div>
                </div>

              </div>
            </li>
            <li className="dropdown">
              <span className="hoo fw-bold">Medical <IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="d-flex justify-content-center align-items-center gap-4">
                  <div className="dropdown-column">
                    <h6 className="text-nowrap fw-bold">NCERT</h6>
                    <a href="#">Physics</a>
                    <a href="#">Chemistry</a>
                    <a href="#">Jackets</a>
                  </div>
                  <div className="dropdown-column">
                    <h6 className="text-nowrap fw-bold">AIIMS</h6>
                    <a href="#">Physics</a>
                    <a href="#">Chemistry</a>
                    <a href="#">Jackets</a>
                  </div>
                </div>

              </div>
            </li>
            <li className="dropdown">
              <span className="hoo fw-bold">Civil Services <IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h6 className="text-nowrap fw-bold">UPSC Civil Service</h6>
                  <a href="#">History of India</a>
                  <a href="#">Science and Technology</a>
                  <a href="#">Geography</a>
                  <a href="#">Indian Polity</a>
                  <a href="#">Economy</a>
                  <a href="#">Current Affairs</a>
                  <a href="#">Comprehension</a>
                  <a href="#">Basic Numeracy</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="hoo fw-bold">Defence <IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h6 className="text-nowrap fw-bold">NDA</h6>
                  <a href="#">Mathematics</a>
                  <a href="#">English</a>
                  <a href="#">General Science</a>
                  <a href="#">General Studies</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="hoo fw-bold">SSC <IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h6 className="text-nowrap fw-bold">SSC CGL Tier I</h6>
                  <a href="#">Quantitative Aptitude</a>
                  <a href="#">General Awareness</a>
                  <a href="#">English Comprehension</a>
                  <a href="#">General Intelligence</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="hoo fw-bold">CBSE <IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h6 className="text-nowrap fw-bold">className-12</h6>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Mathematics</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="right-nav" data-aos="zoom-in-left">
          <input type="text" placeholder="Search" />
        </div>
      </header>
    </>
  );
}
