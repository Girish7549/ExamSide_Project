'use client'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/navigation';
import Navbar from "../Components/Navbar/Navbar";
const page = () => {
   
  const router = useRouter();  // Initialize the useRouter hook

  const handleClick = () => {
    router.push('/paperwise/yearwise');  // Navigate to the '/pagewise' route
  };

  return (
    <>
      <Navbar />
      <div className="bg-body-tertiary">
        <div className="container">
          <div className="row justify-content-center">
            <h4 className="mb-3 mt-3">2024</h4>
            {/* First Card - Light Theme */}
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card - Dark Theme */}
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 5th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 5th April Morning Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 4th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 4th April Morning Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 1st February Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 1st February Morning Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 31st January Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 30th January Morning Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 30th January Morning Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                  JEE Main 2024 (Online) 27th January Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" onClick={handleClick}>
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="mb-3">2023</h4>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mb-3">2022</h4>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mb-3">2023</h4>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mb-3">2021</h4>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mb-3">2023</h4>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mb-3">2020</h4>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mb-3">2019</h4>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mb-3">2018</h4>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card bg-light rounded-3 shadow-lg">
                <div className="card-body">
                  <h5 className="text-center text-dark mb-2">
                    JEE Main 2024 (Online) 9th April Evening Shift
                  </h5>
                  <p className="text-center text-muted mb-2">
                    Tue, Apr 9, 2024 3:00 PM
                  </p>
                  <div className="text-center mb-2">
                    <button className="btn btn-outline-success me-2">
                      English
                    </button>
                    <button className="btn btn-outline-danger">Hindi</button>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary">
                      Practice Questions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
