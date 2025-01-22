"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Row, Col, Card, CardBody, CardHeader, Button } from "reactstrap";
import LoginModal from "../Modal/LoginModal";
import SignupModal from "../Modal/SignupModal";
import ForgotModal from "../Modal/ForgotModal";

const CardSections = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };
  const handleForgotClick = () => {
    setShowForgot(true);
  };
  const handleButtonClicked2 = ()=>{
    setShowSignup(true);
  }
  // Function to close modal
  const handleCloseModal2 =()=>{
    setShowSignup(false);
  }
  const handleforgotModal =()=>{
    setShowForgot(false);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const router = useRouter(); // Initialize the useRouter hook

  const handleClick = () => {
    router.push("/paperwise"); // Navigate to the '/pagewise' route
  };

  return (
    <div>
      <div className="p-3">
        <h4 className="p-2">Joint Entrance Examination</h4>
        <Row>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>JEEs Main</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="">
                  <div>
                    <Button color="success" block onClick={handleClick}>
                      Paper Wise
                    </Button>
                  </div>
                  <div>
                    <Button color="danger" block>
                      Chapter Wise
                    </Button>
                  </div>
                </div>

                <Button color="primary" block onClick={handleButtonClick}>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-advanced.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>JEE Advanced</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block onClick={handleButtonClicked2}>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/wbjee.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>WB JEE</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block onClick={handleForgotClick}>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/bitsat.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>BITSAT</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/mht-cet.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>MHT CET</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/kcet.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>KCET</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/comedk.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>COMEDK</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/assets/5ef25410-97bb-4621-853a-755d0bbaac4d/348328b0-eb61-11ee-831d-6530431f76f8/6y3zli1lu89xfp8.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>VITEEE</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/assets/67db133c-ba65-4e2c-ad65-05158ae574a3/a9db1730-387d-11ef-afbe-73a2e898f5a9/jaoe38c1ly4hsb39.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>AP EAPCET</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/assets/6dd28730-004e-4717-bdcb-88d719ed6def/739edcd0-d173-11ef-b8cb-250dbba0307d/jaoe38c1m5umvggu.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>TS EAMCET</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="p-2">Medical</h4>
        <Row>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>NEET</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/assets/5ca40f45-b700-4f46-9b8f-83745abac08c/fc927a90-6799-11ef-8b22-651b64eb4256/jaoe38c1m0i5qvui.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>AIIMS</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4"></Col>
        </Row>
        <h4 className="p-2">Graduate Aptitude Test in Engineering</h4>
        <Row>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>GATE CSE</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>GATE ECE</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block onClick={handleClick}>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>GATE EE</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>GATE CE</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>GATE PI</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>GATE ME</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>GATE IN</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="p-2">Civil Services</h4>
        <Row className="mt-4">
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>UPSC Civil Service</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="p-2">Defence</h4>
        <Row className="mt-4">
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>NDA</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="p-2">Staff Selection Commission</h4>
        <Row className="mt-4">
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>SSC CGL Tier I</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h4 className="p-2">CBSE</h4>
        <Row className="mt-4">
          <Col sm="12" md="4">
            <Card>
              <CardHeader className="text-center">
                <div className="d-flex justify-content-between align-content-center">
                  <div>
                    <img
                      src="https://app-assets.cdn.examgoal.net/fly/@width/image/exam-icons/in/jee/jee-main.png"
                      alt="Logo"
                      width="50"
                      height="50"
                      className="mb-3"
                    />
                  </div>
                  <div>
                    <h4>Class 12</h4>
                    <p className="text-muted">
                      Previous Years Questions with Solutions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Button color="success" block>
                  Paper Wise
                </Button>
                <Button color="danger" block>
                  Chapter Wise
                </Button>
                <Button color="primary" block>
                  Take Mock Test or Practice
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <LoginModal showModal={showModal} toggle={handleCloseModal} />
      <SignupModal showModal={showSignup} toggle={handleCloseModal2}/>
      <ForgotModal showModal={showForgot} toggle={handleforgotModal}/>
    </div>
  );
};

export default CardSections;
