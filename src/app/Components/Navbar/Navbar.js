import React from "react";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header id="navb" className="nav">
        <Link href={"/"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPa7xUg01XNO3nPMzTKzq6Y7UUzo6wP2ZfIRDVZdaLxjxKTy29wDFTcADnIgHw-Wo1Obw&usqp=CAU"
            alt="Logo"
            className="logo"
          />
        </Link>
        <div className="navbar">
          <ul>
            <li className="dropdown">
              {" "}
              <span className="hoo">
                Join Entrance <IoIosArrowDown />
              </span>
              <div class="dropdown-content">
                <div class="dropdown-column">
                  <h4>JEE MAin</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
                <div class="dropdown-column">
                  <h4>JEE advanced</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
                <div class="dropdown-column">
                  <h4>WB JEE</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="hoo">
                {" "}
                Medical
                <IoIosArrowDown />
              </span>
              <div class="dropdown-content">
                <div class="dropdown-column">
                  <h4>NERT</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
                <div class="dropdown-column">
                  <h4>AIIMS</h4>
                  <a href="#">Physics</a>
                  <a href="#">Chemistry</a>
                  <a href="#">Jackets</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="hoo">
                Civil Services
                <IoIosArrowDown />
              </span>
              <div class="dropdown-content">
                <div class="dropdown-column">
                  <h4>UPSC Civil Service</h4>
                  <a href="#">History of india</a>
                  <a href="#">Science and Technology</a>
                  <a href="#">Geography</a>
                  <a href="#">Indian Polity</a>
                  <a href="#">Economy</a>
                  <a href="#">Current Affairs</a>
                  <a href="#">Comprehension</a>
                  <a href="#"> BAsic Numeracy</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="hoo">
                Defence
                <IoIosArrowDown />
              </span>
              <div class="dropdown-content">
                <div class="dropdown-column">
                  <h4>NDa</h4>
                  <a href="#">Mathematics</a>
                  <a href="#"> English</a>
                  <a href="#"> General Science</a>
                  <a href="#"> General Studies</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="hoo">
                SSC
                <IoIosArrowDown />
              </span>
              <div class="dropdown-content">
                <div class="dropdown-column">
                  <h4>SSC CGL Tier I</h4>
                  <a href="#">Quantitative Aptitude</a>
                  <a href="#">General Awarenes</a>
                  <a href="#">English Comprehension</a>
                  <a href="#">General Intelligence</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span className="hoo">
                CBSE
                <IoIosArrowDown />
              </span>
              <div class="dropdown-content">
                <div class="dropdown-column">
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
          <button className="button-color">Log in</button>
        </div>
      </header>
    </>
  );
}
