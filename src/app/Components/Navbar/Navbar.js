'use client'
import React, { useState } from "react";
import './Navbar.css';
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupModal from "@/app/Modal/SignupModal";

export default function Navbar() {

  const [showSignup, setShowSignup] = useState(false);

  const handleButtonClicked2 = ()=>{
    setShowSignup(true);
  }
  // Function to close modal
  const handleCloseModal2 =()=>{
    setShowSignup(false);
  }

  return (
    <>
      <header id="navb" className="nav">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPa7xUg01XNO3nPMzTKzq6Y7UUzo6wP2ZfIRDVZdaLxjxKTy29wDFTcADnIgHw-Wo1Obw&usqp=CAU"
            alt="Logo"
            className="logo"
          />
        </div>
        <div className="navbar">
          <ul>
            <li className="dropdown">
              <span className="dropdown2">Join Entrance <IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>JEE Main</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
                <div className="dropdown-column">
                  <h4>JEE Advanced</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
                <div className="dropdown-column">
                  <h4>WB JEE</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="dropdown2">Medical<IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>NERT</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
                <div className="dropdown-column">
                  <h4>AIIMS</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="dropdown2">Civil Services<IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>UPSC Civil Service</h4>
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
              <span className="dropdown2">Defence<IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>NDA</h4>
                  <a href="#">Mathematics</a>
                  <a href="#">English</a>
                  <a href="#">General Science</a>
                  <a href="#">General Studies</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="dropdown2">SSC<IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>SSC CGL Tier I</h4>
                  <a href="#">Quantitative Aptitude</a>
                  <a href="#">General Awareness</a>
                  <a href="#">English Comprehension</a>
                  <a href="#">General Intelligence</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="dropdown2">CBSE<IoIosArrowDown /></span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>Class-12</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Mathematics</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <input type="text" placeholder="Search" />
          <button className="me-2" onClick={handleButtonClicked2}>Signup</button>
        </div>
      </header>
      <SignupModal showModal={showSignup} toggle={handleCloseModal2}/>
    </>
  );
}
