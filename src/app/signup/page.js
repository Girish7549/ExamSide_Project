"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar/Navbar";
import Link from "next/link";

function SignupPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confshow, setConfShow] = useState(false);

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleClickShowPassword2 = () => {
    setConfShow((prevState) => !prevState);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <>
      <Navbar />
      <div className="p-2 bd-color-1">
        <Row className="justify-content-center ">
          <Col md={6}>
            <Card className="shadow-lg rounded-4">
              <CardBody className="bg-color-2 rounded-3">
                <CardTitle tag="h4" className="text-center mb-2">
                  Create Your Account
                </CardTitle>
                <CardText className="text-center mb-3 text-muted">
                  Join the community! We just need a few details to get started.
                </CardText>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    {/* First Name and Last Name */}
                    <Col xs={12} md={6}>
                      <FormGroup>
                        <Label for="firstName">
                          First Name<span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="rounded-2"
                          placeholder="Enter your first name"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs={12} md={6}>
                      <FormGroup>
                        <Label for="lastName">
                          Last Name<span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="rounded-2"
                          placeholder="Enter your last name"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email">
                      Email<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      className="rounded-2"
                      placeholder="Enter your email"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="phone">
                      Phone<span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="number"
                      name="phone"
                      className="rounded-2"
                      placeholder="Enter your phone"
                      required
                    />
                  </FormGroup>

                  {/* Password Field */}
                  <FormGroup>
                    <Label for="password">
                      Password<span className="text-danger">*</span>
                    </Label>
                    <div className="input-group">
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="rounded-2"
                        required
                      />
                      <div className="input-group-append">
                        <Button
                          type="button"
                          onClick={handleClickShowPassword}
                          color="link"
                          className="input-group-text rounded-2"
                        >
                          {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                        </Button>
                      </div>
                    </div>
                  </FormGroup>

                  {/* Confirm Password Field */}
                  <FormGroup>
                    <Label for="confirmPassword">
                      Confirm Password<span className="text-danger">*</span>
                    </Label>
                    <div className="input-group">
                      <Input
                        type={confshow ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="rounded-2"
                      />
                      <div className="input-group-append">
                        <Button
                          type="button"
                          onClick={handleClickShowPassword2}
                          color="link"
                          className="input-group-text"
                        >
                          {confshow ? <IoMdEye /> : <IoMdEyeOff />}
                        </Button>
                      </div>
                    </div>
                  </FormGroup>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    color="primary"
                    block
                    className="mt-4 py-2"
                  >
                    Sign Up
                  </Button>
                </Form>

                {/* Sign-up redirect */}
                <div className="text-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <Link href={"/login"}>
                      <Button color="link" className="text-primary">
                        Login
                      </Button>
                    </Link>
                  </p>
                </div>

                {/* Google Sign-In Button */}
                <Button
                  block
                  color="secondary"
                  className="google-btn mt-3 py-2"
                  onClick={() => alert("Google login")}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ9p0kwWYIU-O7dnjXUwIBnxItQb08fMMBQ&s"
                    alt="google icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Continue with Google
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SignupPage;
