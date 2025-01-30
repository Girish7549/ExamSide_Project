"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MCQQuestion from "@/app/Components/MCQuestion/MCQuestion";


const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <>
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center px-3 py-2 bg-primary text-white shadow-sm">
        {/* Left Section */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-light btn-sm">⏸</button>
          <span className="fw-bold text-truncate">
            JEE Main 2024 (Online) 9th April Evening Shift
          </span>
        </div>
        {/* Right Section */}
        <div className="d-flex align-items-center gap-3">
          <span className="fw-bold">02:28:49</span>
          <div className="d-flex align-items-center gap-3">
            <span className="cursor-pointer" title="Fullscreen">
              ⛶
            </span>
            <span className="cursor-pointer" title="Dark Mode">
              🌙
            </span>
            <span className="cursor-pointer" title="Translate">
              🌐
            </span>
            <div className="dropdown">
              <button
                className="btn btn-link text-white dropdown-toggle"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ≡
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    User Name
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="  my-4 p-2">
        {/* Tab Headers */}
        <div
          className="btn-group mb-3"
          role="group"
          aria-label="Tab Navigation"
        >
          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeTab === "tab1" ? "active" : ""
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            Maths
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeTab === "tab2" ? "active" : ""
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            Physics
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              activeTab === "tab3" ? "active" : ""
            }`}
            onClick={() => handleTabClick("tab3")}
          >
            Chemistry
          </button>
        </div>

        {/* Tab Content */}
        <div className="border p-4 rounded bg-light">
          {activeTab === "tab1" && <MCQQuestion tab={"1"}/>}
          {activeTab === "tab2" && <MCQQuestion tab={"2"}/>}
          {activeTab === "tab3" && <MCQQuestion tab={"3"}/>}
        </div>
      </div>
    </>
  );
};

export default Tab;
