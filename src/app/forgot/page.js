"use client";
import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap";
import OtpInput from "react-otp-input"; // Import react-otp-input
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar/Navbar";

function ForgotPasswordPage() {
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
    startTimer(); // Start the countdown timer
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
    <>
      <Navbar />
      <div className="py-3">
        <Row className="justify-content-center ">
          <Col md={6}>
            {/* Card Container for Email Form */}
            <Card className="shadow-lg rounded-4 w-75">
              <CardBody>
                <div className="text-center mb-4">
                  <h3 className="form-title">
                    {showOtpInput ? "Enter OTP" : "Forgot Password?"}
                  </h3>
                  <p className="form-description">
                    {showOtpInput
                      ? `We’ve sent an OTP to your : ${email}`
                      : "Enter your email to receive the OTP."}
                  </p>
                  {isTimerExpired && (
                    <p className="text-danger">Your OTP has expired!</p>
                  )}
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
                      className="mt-3 rounded-4"
                    >
                      Send OTP
                    </Button>
                  </Form>
                )}

                {/* OTP Form - When OTP input is shown */}
                {showOtpInput && !isTimerExpired && (
                  <Form className="" onSubmit={handleSubmitOtp}>
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
                      className="mt-3 rounded-4"
                    >
                      Verify OTP
                    </Button>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Button
                        color="secondary"
                        onClick={handleGoBackToEmail}
                        className="rounded-4"
                      >
                        <span>&larr; Go Back</span>
                      </Button>
                      <p className="text-muted">
                        Time Left: {formatTime(timer)}
                      </p>
                    </div>
                  </Form>
                )}

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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ForgotPasswordPage;
