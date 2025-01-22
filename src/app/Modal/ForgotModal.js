import React, { useState} from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
} from "reactstrap";
import OtpInput from "react-otp-input"; // Import react-otp-input
import "bootstrap/dist/css/bootstrap.min.css";

function ForgotModal({ showModal, toggle }) {
  const [email, setEmail] = useState(""); // State for email
  const [otp, setOtp] = useState(""); // State for OTP
  const [showOtpInput, setShowOtpInput] = useState(false); // State to toggle OTP input visibility
  const [isEmailForm, setIsEmailForm] = useState(true); // State to toggle between email form and OTP form
  const [timer, setTimer] = useState(300); // 5 minutes countdown in seconds
  const [isTimerExpired, setIsTimerExpired] = useState(false); // To track if OTP is expired

  // Handle form submission for email (OTP generation)
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setShowOtpInput(true); // Show OTP input after email is submitted
    setIsEmailForm(false); // Toggle form state to OTP form
    // Simulate email sending (for demonstration purposes)
    sendEmail();
    startTimer(); // Start the countdown timer
  };

  // Function to simulate sending email
  const sendEmail = () => {
    console.log("Sending OTP to email@gmail.com...");
    // Here you can call an API or backend to send the OTP email
  };

  // Start countdown timer
  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTimerExpired(true); // Set timer expired
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle form submission for OTP verification
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    alert("OTP Verified!");
    // Proceed with password reset or further steps
  };

  // Convert seconds to mm:ss format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };


  // Handle going back to the email form
  const handleGoBackToEmail = () => {
    setShowOtpInput(false); // Hide OTP input
    setIsEmailForm(true); // Show email form
    setEmail(""); // Reset email field
    setOtp(""); // Reset OTP field
    setIsTimerExpired(false); // Reset the timer expired flag
    setTimer(300); // Reset timer to 5 minutes
  };

  // Resend OTP functionality
  const handleResendOtp = () => {
    setIsTimerExpired(false); // Reset OTP expiration status
    setOtp(""); // Clear OTP field
    sendEmail(); // Simulate sending the OTP email again
    setTimer(300); // Reset timer to 5 minutes
    startTimer(); // Restart the countdown timer
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle} size="md" centered>
        <ModalHeader toggle={toggle} className="text-center border-0">
          <h4>Forgot Password</h4>
        </ModalHeader>
        <ModalBody className="bg-light rounded-4 p-4">
          <Container>
            {/* <Row className="justify-content-center"> */}
            <Col className="d-flex justify-content-center align-items-center">
              <div className="w-100">
                <div className="text-center mb-4">
                  <h5>{showOtpInput ? "Enter OTP" : "Forgot Password?"}</h5>
                  <p>
                    {showOtpInput
                      ? "We’ve sent you an OTP to your email."
                      : "Enter your email to receive the OTP."}
                  </p>
                  {isTimerExpired && <p>Your OTP has expired!</p>}
                </div>

                {/* Email Form - When OTP is not yet shown */}
                {isEmailForm && (
                  <Form onSubmit={handleSubmitEmail}>
                    <FormGroup>
                      <Label for="email">
                        Email <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-4"
                      />
                    </FormGroup>
                    <Button
                      color="primary"
                      type="submit"
                      block
                      className="rounded-4 mt-3"
                    >
                      Send OTP
                    </Button>
                  </Form>
                )}

                {/* OTP Form - When OTP input is shown */}
                {showOtpInput && !isTimerExpired && (
                  <Form onSubmit={handleSubmitOtp}>
                    <FormGroup>
                      <Label for="otp">
                        Enter OTP <span className="text-danger">*</span>
                      </Label>
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        separator={<span>-</span>}
                        inputStyle={{
                          width: "50px",
                          height: "50px",
                          margin: "0 5px",
                          fontSize: "20px",
                          textAlign: "center",
                          borderRadius: "8px",
                          border: "0.5px solid #7431f9",
                        }}
                        renderInput={(props) => <input {...props} />} // Render each OTP input
                      />
                    </FormGroup>
                    <Button
                      color="primary"
                      type="submit"
                      block
                      className="rounded-4 mt-3"
                    >
                      Verify OTP
                    </Button>
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div>
                        <Button
                          color="secondary"
                          onClick={handleGoBackToEmail}
                          className="rounded-4 mt-3"
                        >
                          <span>&larr; Go Back</span>
                        </Button>
                      </div>
                      <div>
                        <p className="mt-3">Time Left: {formatTime(timer)}</p>
                      </div>
                    </div>
                  </Form>
                )}

                {/* Go Back Button - To go back to email form */}
                {/* {!isEmailForm && !isTimerExpired && ( */}
                {/* <Button
                  color="secondary"
                  onClick={handleGoBackToEmail}
                  className="rounded-4 mt-3"
                >
                  <span>&larr; Go Back</span>
                </Button> */}
                {/* )} */}

                {/* Resend OTP Button */}
                {isTimerExpired && (
                  <Button
                    color="warning"
                    onClick={handleResendOtp}
                    block
                    className="rounded-4 mt-3"
                  >
                    Resend OTP
                  </Button>
                )}
              </div>
            </Col>
            {/* </Row> */}
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ForgotModal;
