"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdGTranslate } from "react-icons/md";
import { useState } from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import MCQQuestion from "@/app/Components/MCQuestion/MCQuestion";

const question = () => {
  const [activeSubject, setActiveSubject] = useState("Chemistry");

  const handleSubjectClick = (subject) => {
    setActiveSubject(subject);
  };

  return (
    <>
      <Navbar/>
      <div className="bg-body-tertiary">
        <div className="p-4">
          <div className="d-flex col gap-3">
            {/* Left Card - Menu Section */}
            <div
              className="col-3 overflow-auto card shadow-lg"
              style={{
                maxHeight: "1200px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <div className="text-center py-3">
                <h5>JEE Main</h5>
              </div>
              <div className="py-2 flex flex-col gap-2 text-sm">
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>

                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>

                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                <p className="px-4 py-1.5 text-center d-block text-decoration-none text-dark">
                  JEE Main 2024 (Online) 9th April Evening Shift
                </p>
                {/* You can add more links for other shifts here */}
              </div>
            </div>

            {/* Right Card - Content Section */}
            <div className="rounded">
              <div>
                <div className="row mb-2">
                  <div className="col-12">
                    <div className="card p-3 rounded-pill shadow-lg pointer-cursor">
                      <div className="d-flex justify-content-evenly align-items-center">
                        <div
                          className={`px-3 ${
                            activeSubject === "Chemistry"
                              ? "bg-primary text-white rounded-pill"
                              : ""
                          }`}
                          onClick={() => handleSubjectClick("Chemistry")}
                        >
                          Chemistry
                        </div>
                        <div
                          className={`px-3 ${
                            activeSubject === "Mathematics"
                              ? "bg-primary text-white rounded-pill"
                              : ""
                          }`}
                          onClick={() => handleSubjectClick("Mathematics")}
                        >
                          Mathematics
                        </div>
                        <div
                          className={`px-3 ${
                            activeSubject === "Physics"
                              ? "bg-primary text-white rounded-pill"
                              : ""
                          }`}
                          onClick={() => handleSubjectClick("Physics")}
                        >
                          Physics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <button className="btn btn-outline-primary">
                      PREVIOUS
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-outline-primary">NEXT</button>
                  </div>
                </div>
                {/* Chemistry Section */}
                <div>
                  <MCQQuestion/>
                  <div className="mb-3 p-1">
                    {/* Card 1 */}
                    <div className=" mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="d-flex justify-content-between align-content-center">
                          <div>
                            <div className="d-flex gap-3 mt-2">
                              <div>
                                <h6 className="ms-1">2.</h6>
                              </div>
                              <div>
                                <h6>
                                  JEE Main 2024 (Online) 9th April Evening Shift
                                </h6>

                                <div className="d-flex gap-2">
                                  <div className=" text-primary">
                                    MCQ (Single Correct Answer)
                                  </div>
                                  <div className=" text-success">+4</div>
                                  <div className=" text-danger">-1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                            <MdGTranslate />
                          </div>
                        </div>
                        <hr />
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Let the foci of a hyperbola H coincide with the foci
                            of the ellipse E:
                            <span>(x - 1)²/100 + (y - 1)²/75 = 1</span> and the
                            eccentricity of the hyperbola H be the reciprocal of
                            the eccentricity of the ellipse E. If the length of
                            the transverse axis of H is α and the length of its
                            conjugate axis is β, then 3α² + 2β² is equal to
                          </p>

                          <div className="card">
                            <div className="card-body">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer1"
                                  value="225"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer1"
                                >
                                  A. 225
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer2"
                                  value="237"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer2"
                                >
                                  B. 237
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer3"
                                  value="242"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer3"
                                >
                                  C. 242
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer4"
                                  value="205"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer4"
                                >
                                  D. 205
                                </label>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary mt-3">
                            Check Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 p-1">
                    {/* Card 1 */}
                    <div className=" mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="d-flex justify-content-between align-content-center">
                          <div>
                            <div className="d-flex gap-3 mt-2">
                              <div>
                                <h6 className="ms-1">3.</h6>
                              </div>
                              <div>
                                <h6>
                                  JEE Main 2024 (Online) 9th April Evening Shift
                                </h6>

                                <div className="d-flex gap-2">
                                  <div className=" text-primary">
                                    MCQ (Single Correct Answer)
                                  </div>
                                  <div className=" text-success">+4</div>
                                  <div className=" text-danger">-1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                            <MdGTranslate />
                          </div>
                        </div>
                        <hr />
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Let the foci of a hyperbola H coincide with the foci
                            of the ellipse E:
                            <span>(x - 1)²/100 + (y - 1)²/75 = 1</span> and the
                            eccentricity of the hyperbola H be the reciprocal of
                            the eccentricity of the ellipse E. If the length of
                            the transverse axis of H is α and the length of its
                            conjugate axis is β, then 3α² + 2β² is equal to
                          </p>

                          <div className="card">
                            <div className="card-body">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer1"
                                  value="225"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer1"
                                >
                                  A. 225
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer2"
                                  value="237"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer2"
                                >
                                  B. 237
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer3"
                                  value="242"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer3"
                                >
                                  C. 242
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer4"
                                  value="205"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer4"
                                >
                                  D. 205
                                </label>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary mt-3">
                            Check Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 p-1">
                    {/* Card 1 */}
                    <div className=" mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="d-flex justify-content-between align-content-center">
                          <div>
                            <div className="d-flex gap-3 mt-2">
                              <div>
                                <h6 className="ms-1">4.</h6>
                              </div>
                              <div>
                                <h6>
                                  JEE Main 2024 (Online) 9th April Evening Shift
                                </h6>

                                <div className="d-flex gap-2">
                                  <div className=" text-primary">
                                    MCQ (Single Correct Answer)
                                  </div>
                                  <div className=" text-success">+4</div>
                                  <div className=" text-danger">-1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                            <MdGTranslate />
                          </div>
                        </div>
                        <hr />
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Let the foci of a hyperbola H coincide with the foci
                            of the ellipse E:
                            <span>(x - 1)²/100 + (y - 1)²/75 = 1</span> and the
                            eccentricity of the hyperbola H be the reciprocal of
                            the eccentricity of the ellipse E. If the length of
                            the transverse axis of H is α and the length of its
                            conjugate axis is β, then 3α² + 2β² is equal to
                          </p>

                          <div className="card">
                            <div className="card-body">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer1"
                                  value="225"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer1"
                                >
                                  A. 225
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer2"
                                  value="237"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer2"
                                >
                                  B. 237
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer3"
                                  value="242"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer3"
                                >
                                  C. 242
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer4"
                                  value="205"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer4"
                                >
                                  D. 205
                                </label>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary mt-3">
                            Check Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 p-1">
                    {/* Card 1 */}
                    <div className=" mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="d-flex justify-content-between align-content-center">
                          <div>
                            <div className="d-flex gap-3 mt-2">
                              <div>
                                <h6 className="ms-1">5.</h6>
                              </div>
                              <div>
                                <h6>
                                  JEE Main 2024 (Online) 9th April Evening Shift
                                </h6>

                                <div className="d-flex gap-2">
                                  <div className=" text-primary">
                                    MCQ (Single Correct Answer)
                                  </div>
                                  <div className=" text-success">+4</div>
                                  <div className=" text-danger">-1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                            <MdGTranslate />
                          </div>
                        </div>
                        <hr />
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Let the foci of a hyperbola H coincide with the foci
                            of the ellipse E:
                            <span>(x - 1)²/100 + (y - 1)²/75 = 1</span> and the
                            eccentricity of the hyperbola H be the reciprocal of
                            the eccentricity of the ellipse E. If the length of
                            the transverse axis of H is α and the length of its
                            conjugate axis is β, then 3α² + 2β² is equal to
                          </p>

                          <div className="card">
                            <div className="card-body">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer1"
                                  value="225"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer1"
                                >
                                  A. 225
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer2"
                                  value="237"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer2"
                                >
                                  B. 237
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer3"
                                  value="242"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer3"
                                >
                                  C. 242
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer4"
                                  value="205"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer4"
                                >
                                  D. 205
                                </label>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary mt-3">
                            Check Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 p-1">
                    {/* Card 1 */}
                    <div className=" mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="d-flex justify-content-between align-content-center">
                          <div>
                            <div className="d-flex gap-3 mt-2">
                              <div>
                                <h6 className="ms-1">6.</h6>
                              </div>
                              <div>
                                <h6>
                                  JEE Main 2024 (Online) 9th April Evening Shift
                                </h6>

                                <div className="d-flex gap-2">
                                  <div className=" text-primary">
                                    MCQ (Single Correct Answer)
                                  </div>
                                  <div className=" text-success">+4</div>
                                  <div className=" text-danger">-1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                            <MdGTranslate />
                          </div>
                        </div>
                        <hr />
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Let the foci of a hyperbola H coincide with the foci
                            of the ellipse E:
                            <span>(x - 1)²/100 + (y - 1)²/75 = 1</span> and the
                            eccentricity of the hyperbola H be the reciprocal of
                            the eccentricity of the ellipse E. If the length of
                            the transverse axis of H is α and the length of its
                            conjugate axis is β, then 3α² + 2β² is equal to
                          </p>

                          <div className="card">
                            <div className="card-body">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer1"
                                  value="225"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer1"
                                >
                                  A. 225
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer2"
                                  value="237"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer2"
                                >
                                  B. 237
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer3"
                                  value="242"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer3"
                                >
                                  C. 242
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer4"
                                  value="205"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer4"
                                >
                                  D. 205
                                </label>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary mt-3">
                            Check Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 p-1">
                    {/* Card 1 */}
                    <div className=" mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="d-flex justify-content-between align-content-center">
                          <div>
                            <div className="d-flex gap-3 mt-2">
                              <div>
                                <h6 className="ms-1">7.</h6>
                              </div>
                              <div>
                                <h6>
                                  JEE Main 2024 (Online) 9th April Evening Shift
                                </h6>

                                <div className="d-flex gap-2">
                                  <div className=" text-primary">
                                    MCQ (Single Correct Answer)
                                  </div>
                                  <div className=" text-success">+4</div>
                                  <div className=" text-danger">-1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                            <MdGTranslate />
                          </div>
                        </div>
                        <hr />
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Let the foci of a hyperbola H coincide with the foci
                            of the ellipse E:
                            <span>(x - 1)²/100 + (y - 1)²/75 = 1</span> and the
                            eccentricity of the hyperbola H be the reciprocal of
                            the eccentricity of the ellipse E. If the length of
                            the transverse axis of H is α and the length of its
                            conjugate axis is β, then 3α² + 2β² is equal to
                          </p>

                          <div className="card">
                            <div className="card-body">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer1"
                                  value="225"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer1"
                                >
                                  A. 225
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer2"
                                  value="237"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer2"
                                >
                                  B. 237
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer3"
                                  value="242"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer3"
                                >
                                  C. 242
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer4"
                                  value="205"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer4"
                                >
                                  D. 205
                                </label>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary mt-3">
                            Check Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 p-1">
                    {/* Card 1 */}
                    <div className=" mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="d-flex justify-content-between align-content-center">
                          <div>
                            <div className="d-flex gap-3 mt-2">
                              <div>
                                <h6 className="ms-1">8.</h6>
                              </div>
                              <div>
                                <h6>
                                  JEE Main 2024 (Online) 9th April Evening Shift
                                </h6>

                                <div className="d-flex gap-2">
                                  <div className=" text-primary">
                                    MCQ (Single Correct Answer)
                                  </div>
                                  <div className=" text-success">+4</div>
                                  <div className=" text-danger">-1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                            <MdGTranslate />
                          </div>
                        </div>
                        <hr />
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Let the foci of a hyperbola H coincide with the foci
                            of the ellipse E:
                            <span>(x - 1)²/100 + (y - 1)²/75 = 1</span> and the
                            eccentricity of the hyperbola H be the reciprocal of
                            the eccentricity of the ellipse E. If the length of
                            the transverse axis of H is α and the length of its
                            conjugate axis is β, then 3α² + 2β² is equal to
                          </p>

                          <div className="card">
                            <div className="card-body">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer1"
                                  value="225"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer1"
                                >
                                  A. 225
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer2"
                                  value="237"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer2"
                                >
                                  B. 237
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer3"
                                  value="242"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer3"
                                >
                                  C. 242
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="answer"
                                  id="answer4"
                                  value="205"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="answer4"
                                >
                                  D. 205
                                </label>
                              </div>
                            </div>
                          </div>
                          <button className="btn btn-primary mt-3">
                            Check Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default question;
