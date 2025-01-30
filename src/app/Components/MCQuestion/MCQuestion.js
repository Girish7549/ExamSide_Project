"use client";
import "bootstrap/dist/css/bootstrap.min.css";

const MCQQuestion = ({tab})=> {

  function selectOption(option) {
    alert(`You selected option: ${option}`);
  }
  
  return (
    <>
      <div className="p-2">
        <div className="d-flex p-3 flex-column bg-white border rounded shadow-sm">
          {/* Header Section */}
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
            <h5 className="mb-0">
              {tab}. JEE Main 2024 (Online) 9th April Evening Shift
            </h5>
            <p className="text-muted mb-0">02:46:31</p>
          </div>

          {/* Question Section */}
          <div className="mb-4 d-flex  flex-column">
            <h4 className="h6">
              The correct stability order of the following resonance structures
              of <b>CH₃ - CH = CH - CHO</b> is:
            </h4>
            {/* Image Section */}
            <div className="d-flex justify-content-center align-items-center border rounded p-3">
              <img
                src="https://app-content.cdn.examgoal.net/fly/2000/image/1luxmj2rm/363988b7-2d3c-4fe4-b075-b0ec38e298b1/141bba20-f952-11ee-ad11-e3c9a32822d3/file-1luxmj2rn.png?format=png"
                alt="Resonance Structures"
                className="img-fluid rounded"
                style={{ maxHeight: "350px" }}
              />
            </div>
          </div>

          {/* Options Section */}
          <div className="d-flex flex-column gap-3">
            <button
              className="btn btn-light border text-start"
              onClick={() => selectOption("A")}
            >
              <span className="badge bg-secondary me-3">A</span>
              II &gt; III &gt; I
            </button>
            <button
              className="btn btn-light border text-start"
              onClick={() => selectOption("B")}
            >
              <span className="badge bg-secondary me-3">B</span>
              II &gt; I &gt; III
            </button>
            <button
              className="btn btn-light border text-start"
              onClick={() => selectOption("C")}
            >
              <span className="badge bg-secondary me-3">C</span>
              III &gt; II &gt; I
            </button>
            <button
              className="btn btn-light border text-start"
              onClick={() => selectOption("D")}
            >
              <span className="badge bg-secondary me-3">D</span>I &gt; II &gt;
              III
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MCQQuestion;
