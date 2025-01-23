"use client"
import React from "react";
import "./ChapterWise.css";
import Navbar from "../Components/Navbar/Navbar";
import Link from 'next/link'

export default function ChapterWise() {
  return (
    <>
      <Navbar />
      <div className="chapter-wise">
        <h3 className="heading">Mechanics</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-2"> {/* Grid for responsive cards */}
          {/* Card 1 */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Unit & Measurements</h6>
                <p className="card-text text-nowrap">
                  <strong>2024:</strong> Total:33 Avg:1.65 Weightage:5.5%<span className="text-success">+40.96%</span>
                </p>
                <Link href="/paperwise/yearwise" className="btn btn-primary d-flex justify-content-center align-content-center">
                  View Questions
                </Link>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Unit & Measurements</h6>
                <p className="card-text text-nowrap">
                  <strong>2024:</strong> Total:33 Avg:1.65 Weightage:5.5%<span className="text-success">+40.96%</span>
                </p>
                <a href="#" className="btn btn-primary d-flex justify-content-center align-content-center">
                  View Questions
                </a>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Unit & Measurements</h6>
                <p className="card-text text-nowrap">
                  <strong>2024:</strong> Total:33 Avg:1.65 Weightage:5.5%<span className="text-success">+40.96%</span>
                </p>
                <a href="#" className="btn btn-primary d-flex justify-content-center align-content-center">
                  View Questions
                </a>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Unit & Measurements</h6>
                <p className="card-text text-nowrap">
                  <strong>2024:</strong> Total:33 Avg:1.65 Weightage:5.5%<span className="text-success">+40.96%</span>
                </p>
                <a href="#" className="btn btn-primary d-flex justify-content-center align-content-center">
                  View Questions
                </a>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Unit & Measurements</h6>
                <p className="card-text text-nowrap">
                  <strong>2024:</strong> Total:33 Avg:1.65 Weightage:5.5%<span className="text-success">+40.96%</span>
                </p>
                <a href="#" className="btn btn-primary d-flex justify-content-center align-content-center">
                  View Questions
                </a>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Unit & Measurements</h6>
                <p className="card-text text-nowrap">
                  <strong>2024:</strong> Total:33 Avg:1.65 Weightage:5.5%<span className="text-success">+40.96%</span>
                </p>
                <a href="#" className="btn btn-primary d-flex justify-content-center align-content-center">
                  View Questions
                </a>
              </div>
            </div>
          </div>
          {/* Card 7 */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Unit & Measurements</h6>
                <p className="card-text text-nowrap">
                  <strong>2024:</strong> Total:33 Avg:1.65 Weightage:5.5%<span className="text-success">+40.96%</span>
                </p>
                <a href="#" className="btn btn-primary d-flex justify-content-center align-content-center">
                  View Questions
                </a>
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Unit & Measurements</h6>
                <p className="card-text text-nowrap">
                  <strong>2024:</strong> Total:33 Avg:1.65 Weightage:5.5%<span className="text-success">+40.96%</span>
                </p>
                <a href="#" className="btn btn-primary d-flex justify-content-center align-content-center">
                  View Questions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
