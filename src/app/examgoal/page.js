import React from "react";
import "./ExamGOAL.css";
import Link from "next/link";
export default function ExamGOAL() {
  return (
    <>
      <button className="menu-toggle">☰</button>
      <div className="dashboard-container">
        <div className="sidebar" id="sidebar">
          <Link href={"/"}>
            <div className="header">ExamGOAL</div>
          </Link>

          <div className="vertical-scroll-container">
            <div className="scroll-content">
              <li className="item">
                <span>Dashboard</span>
              </li>
              <li className="item">
                <span>Previous Year Questions</span>
              </li>
              <li className="item">
                <span>NCERT</span>
              </li>
              <li className="item">
                <span>Syllabus</span>
              </li>
              <li className="item">
                <span>My Tests</span>
              </li>
              <li className="item">
                <span>Bookmark Questions</span>
              </li>
              <li className="item">
                <span>Dashboard</span>
              </li>
              <li className="item">
                <span>Previous Year Questions</span>
              </li>
              <li className="item">
                <span>NCERT</span>
              </li>
              <li className="item">
                <span>Syllabus</span>
              </li>
              <li className="item">
                <span>My Tests</span>
              </li>
              <li className="item">
                <span>Bookmark Questions</span>
              </li>
              <li className="item">
                <span>Bookmark Questions</span>
              </li>
              <li className="item">
                <span>Dashboard</span>
              </li>
              <li className="item">
                <span>Previous Year Questions</span>
              </li>
              <li className="item">
                <span>NCERT</span>
              </li>
              <li className="item">
                <span>Syllabus</span>
              </li>
              <li className="item">
                <span>My Tests</span>
              </li>
              <li className="item">
                <span>Bookmark Questions</span>
              </li>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="top-bar">
            <div>ExamGOAL</div>
            <div className="actions">
              <button>Install App</button>
              <button>Settings</button>
            </div>
          </div>

          <div className="notification-bar">
            <span>
              To stay updated on account activity, subscription status, and
              daily goal progress, please enable notifications.
            </span>
            <div>
              <button>Never</button>
              <button>Later</button>
              <button style={{ backgroundColor: "#4caf50", color: "white" }}>
                Enable
              </button>
            </div>
          </div>

          <div className="custom-navbar">
            <button className="custom-nav-button selected">JEE Main</button>
            <button className="custom-nav-button">JEE Advanced</button>
            <button className="custom-nav-button">WB JEE</button>
            <button className="custom-nav-button">BITSAT</button>
            <button className="custom-nav-button">AIIMS</button>
          </div>

          <div className="content">
            <div className="test">
              <h3>Unfinished Test</h3>
              <p>JEE Main 2024 (Online) 9th April Evening Shift</p>
              <p>Time left: 02:59:17</p>
              <button>Resume</button>
              <button className="cancel">Cancel</button>
            </div>

            <div className="main-container">
              <div className="subject-section">
                <div className="subject-card physics-card">
                  <div className="subject-icon">
                    <img
                      src="https://gateclassName.static.cdn.examgoal.net/FiAzwUqKLtaLy9WAH/CchzB6tpYPnlgMljHSsGABT1JE6a6/jCBjRETVFRqhWuxn9sInPH/nuclearenergy.png"
                      alt="Physics"
                    />
                  </div>
                  <h2 className="subject-title">Physics</h2>
                  <p className="subject-description">
                    Chapterwise Questions with Solutions
                    <br />
                    Years: 2002 - 2024
                  </p>
                  <button className="subject-button">View Chapters</button>
                </div>
                <div className="subject-card chemistry-card">
                  <div className="subject-icon">
                    <img
                      src="https://gateclassName.static.cdn.examgoal.net/xH825vaFiylwltNFY/pfhDSTsS7YYU9FsR9CBsOkZcCKneX/s9nQb7hsj0czeHYGWx1dKc/flasks.png"
                      alt="Chemistry"
                    />
                  </div>
                  <h2 className="subject-title">Chemistry</h2>
                  <p className="subject-description">
                    Chapterwise Questions with Solutions
                    <br />
                    Years: 2002 - 2024
                  </p>
                  <button className="subject-button">View Chapters</button>
                </div>
                <div className="subject-card math-card">
                  <div className="subject-icon">
                    <img
                      src="https://gateclassName.static.cdn.examgoal.net/pwpVDs1WZ4ilhEBCX/2ZHgOJmvtJlGzG0bQu0DFkRB7C5lK/TONafxAuwToWCrkxyc2D5U/antique.png"
                      alt="Mathematics"
                    />
                  </div>
                  <h2 className="subject-title">Mathematics</h2>
                  <p className="subject-description">
                    Chapterwise Questions with Solutions
                    <br />
                    Years: 2002 - 2024
                  </p>
                  <button className="subject-button">View Chapters</button>
                </div>
              </div>
              <div className="test-section">
                <h2 className="test-title">Personalized Test</h2>
                <p className="test-description">
                  Create your own personalized test with multiple subjects,
                  chapters, papers and question types.
                </p>
                <button className="test-button">Create Test</button>
              </div>
            </div>

            <div className="paper-container">
              <div className="paper-header">
                <h1 className="paper-title">Papers</h1>
                <select className="paper-year-select">
                  <option value="all">All</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div className="paper-year-section">
                <h2 className="paper-year-title">2024</h2>
                <div className="paper-card-grid">
                  <div className="paper-card">
                    <h3 className="paper-card-title">
                      JEE Main 2024 (Online) 9th April Evening Shift
                    </h3>
                    <p className="paper-card-date">9 April 2024 at 03:00 pm</p>
                    <div className="paper-languages">
                      <span className="paper-lang-tag">English</span>
                      <span className="paper-lang-tag">Hindi (हिंदी)</span>
                    </div>
                    <div className="paper-card-actions">
                      <Link href={"examgoal/taketest"}>
                        <button className="paper-btn paper-btn-test">
                          Take Test
                        </button>
                      </Link>

                      <button className="paper-btn paper-btn-practice">
                        Practice
                      </button>
                    </div>
                  </div>
                  <div className="paper-card">
                    <h3 className="paper-card-title">
                      JEE Main 2024 (Online) 9th April Evening Shift
                    </h3>
                    <p className="paper-card-date">9 April 2024 at 03:00 pm</p>
                    <div className="paper-languages">
                      <span className="paper-lang-tag">English</span>
                      <span className="paper-lang-tag">Hindi (हिंदी)</span>
                    </div>
                    <div className="paper-card-actions">
                      <button className="paper-btn paper-btn-test">
                        Take Test
                      </button>
                      <button className="paper-btn paper-btn-practice">
                        Practice
                      </button>
                    </div>
                  </div>
                  <div className="paper-card">
                    <h3 className="paper-card-title">
                      JEE Main 2024 (Online) 9th April Evening Shift
                    </h3>
                    <p className="paper-card-date">9 April 2024 at 03:00 pm</p>
                    <div className="paper-languages">
                      <span className="paper-lang-tag">English</span>
                      <span className="paper-lang-tag">Hindi (हिंदी)</span>
                    </div>
                    <div className="paper-card-actions">
                      <button className="paper-btn paper-btn-test">
                        Take Test
                      </button>
                      <button className="paper-btn paper-btn-practice">
                        Practice
                      </button>
                    </div>
                  </div>
                  <div className="paper-card">
                    <h3 className="paper-card-title">
                      JEE Main 2024 (Online) 9th April Evening Shift
                    </h3>
                    <p className="paper-card-date">9 April 2024 at 03:00 pm</p>
                    <div className="paper-languages">
                      <span className="paper-lang-tag">English</span>
                      <span className="paper-lang-tag">Hindi (हिंदी)</span>
                    </div>
                    <div className="paper-card-actions">
                      <button className="paper-btn paper-btn-test">
                        Take Test
                      </button>
                      <button className="paper-btn paper-btn-practice">
                        Practice
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
