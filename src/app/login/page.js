"use client";
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, CardBody } from "reactstrap";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar/Navbar";
import Link from "next/link";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center bd-color-1">
        <div className="col-12 p-3 col-md-6 rounded shadow-lg bg-white bg-color-1">
          <CardBody className="bg-color-2">
            <div className="text-center mb-3">
              <h4 className="text-primary">Welcome Back</h4>
              <p className="text-muted">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Login Form */}
            <Form>
              <FormGroup>
                <Label for="email" className="text-dark">
                  Email<span className="text-danger">*</span>
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control rounded-4 shadow-sm mb-3"
                />
              </FormGroup>

              <FormGroup>
                <Label for="password" className="text-dark">
                  Password<span className="text-danger">*</span>
                </Label>
                <div className="input-group">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control rounded-4 shadow-sm"
                  />
                  <div className="input-group-append">
                    <Button
                      type="button"
                      onClick={handleClickShowPassword}
                      color="link"
                      className="input-group-text"
                    >
                      {showPassword ? (
                        <IoMdEye size={20} />
                      ) : (
                        <IoMdEyeOff size={20} />
                      )}
                    </Button>
                  </div>
                </div>
              </FormGroup>

              {/* Remember me and Forgot password */}
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <Label check>
                    <Input type="checkbox" /> Remember me
                  </Label>
                </div>
                <div>
                  <Link href={"/forgot"}>
                    <Button color="link" className="text-primary p-0">
                      Forgot Password?
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Submit button */}
              <Button
                color="primary"
                type="submit"
                block
                className="rounded-4 shadow-sm btn-md mb-3 hover-shadow"
              >
                Sign In
              </Button>
            </Form>

            {/* Google Login */}
            <div className="mt-3">
              <Button
                color="light"
                block
                className="rounded-4 shadow-sm btn-outline-secondary mb-3 hover-shadow"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ9p0kwWYIU-O7dnjXUwIBnxItQb08fMMBQ&s"
                  alt="Google icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Continue with Google
              </Button>
            </div>

            {/* Sign-up redirect */}
            <div className="mt-3 text-center">
              <p>
                Don't have an account?{" "}
                <Link href={"signup"}>
                  <Button color="link" className="text-primary p-0">
                    Sign Up
                  </Button>
                </Link>
              </p>
            </div>
          </CardBody>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
