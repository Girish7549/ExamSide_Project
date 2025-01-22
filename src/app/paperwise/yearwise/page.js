'use client'
import BottomNavBar from "@/app/Components/BottomNavBar";
import TopNavBar from "@/app/Components/TopNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/navigation';

const yearwise = () => {
  const router = useRouter();  // Initialize the useRouter hook

  const handleClick = () => {
    router.push('/paperwise/yearwise/question');  // Navigate to the '/pagewise' route
  };

  return (
    <>
      <TopNavBar />
      <BottomNavBar />
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
                    <div className="card p-3 rounded shadow-lg">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5>
                            JEE Main 2024 (Online) 9th April Morning Shift
                          </h5>
                          <p>Paper was held on Tue, Apr 9, 2024 9:00 AM</p>
                        </div>
                        <div>
                          <button className="btn btn-primary" onClick={handleClick}>
                            View Questions
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chemistry Section */}
                <div>
                  <h4 className="text-lg font-weight-bold mb-3 p-1">
                    Chemistry
                  </h4>
                  <div className="row mb-3 p-1">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3 p-1">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3 p-1">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text fs-6">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3 p-1">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-2">
                      <div className="card shadow-lg rounded">
                        <div className="card-body">
                          <p className="card-text">
                            Identify the product A and product B in the
                            following set of reactions. Lorem ipsum dolor sit
                            amet,
                          </p>
                          <hr />
                          <div className="card">
                          <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mathematics Section */}
                <h4 className="text-lg font-weight-bold mb-3 p-1">
                  Mathematics
                </h4>
                <div className="row mb-3 p-1">
                  {/* Card 1 */}
                  <div className="col-md-4 mb-2">
                    <div className="card shadow-lg rounded">
                      <div className="card-body">
                        <p className="card-text">
                          Identify the product A and product B in the following
                          set of reactions. Lorem ipsum dolor sit amet,
                        </p>
                        <hr />
                        <div className="card">
                        <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="col-md-4 mb-2">
                    <div className="card shadow-lg rounded">
                      <div className="card-body">
                        <p className="card-text">
                          Identify the product A and product B in the following
                          set of reactions. Lorem ipsum dolor sit amet,
                        </p>
                        <hr />
                        <div className="card">
                        <button className="btn btn-outline-primary" onClick={handleClick}>
                            View Questions
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="col-md-4 mb-2">
                    <div className="card shadow-lg rounded">
                      <div className="card-body">
                        <p className="card-text">
                          Identify the product A and product B in the following
                          set of reactions. Lorem ipsum dolor sit amet,
                        </p>
                        <hr />
                        <div className="card">
                          <a
                            href="/past-years/year-wise/jee/jee-main/jee-main-2024-online-9th-april-morning-shift/luy6z50x"
                            className="btn btn-outline-primary btn-block"
                          >
                            View Question
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Physics Section */}
                <h4 className="text-lg font-weight-bold mb-3 p-1">Physics</h4>
                <div className="row mb-3 p-1">
                  {/* Card 1 */}
                  <div className="col-md-4 mb-2">
                    <div className="card shadow-lg rounded">
                      <div className="card-body">
                        <p className="card-text">
                          Identify the product A and product B in the following
                          set of reactions. Lorem ipsum dolor sit amet,
                        </p>
                        <hr />
                        <div className="card">
                          <a
                            href="/past-years/year-wise/jee/jee-main/jee-main-2024-online-9th-april-morning-shift/luy6z50x"
                            className="btn btn-outline-primary btn-block"
                          >
                            View Question
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="col-md-4 mb-2">
                    <div className="card shadow-sm rounded">
                      <div className="card-body">
                        <p className="card-text">
                          Identify the product A and product B in the following
                          set of reactions. Lorem ipsum dolor sit amet,
                        </p>
                        <hr />
                        <div className="card">
                          <a
                            href="/past-years/year-wise/jee/jee-main/jee-main-2024-online-9th-april-morning-shift/luy6z50x"
                            className="btn btn-outline-primary btn-block"
                          >
                            View Question
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="col-md-4 mb-2">
                    <div className="card shadow-sm rounded">
                      <div className="card-body">
                        <p className="card-text">
                          Identify the product A and product B in the following
                          set of reactions. Lorem ipsum dolor sit amet,
                        </p>
                        <hr />
                        <div className="card">
                          <a
                            href="/past-years/year-wise/jee/jee-main/jee-main-2024-online-9th-april-morning-shift/luy6z50x"
                            className="btn btn-outline-primary btn-block"
                          >
                            View Question
                          </a>
                        </div>
                      </div>
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
};

export default yearwise;
