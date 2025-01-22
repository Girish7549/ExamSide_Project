import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
// import "bootstrap/dist/css/bootstrap.min.css";

function LoginModal({ showModal, toggle }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle} size="md" centered>
        <ModalHeader toggle={toggle} className="text-center border-0">
          <h4 className="modal-title text-primary">Welcome Back</h4>
        </ModalHeader>
        <ModalBody className="bg-light rounded-4 p-4">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8">
              <div className="text-center mb-4">
                <h5>Login to your account</h5>
                <p className="text-muted">Enter your credentials to access your account</p>
              </div>

              {/* Login Form */}
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="email" className="text-dark">Email<span className="text-danger">*</span></Label>
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
                  <Label for="password" className="text-dark">Password<span className="text-danger">*</span></Label>
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
                        {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
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
                    <Button color="link" onClick={() => alert("Forgot password clicked")} className="text-primary p-0">
                      Forgot Password?
                    </Button>
                  </div>
                </div>

                {/* Submit button */}
                <Button color="primary" type="submit" block className="rounded-4 shadow-sm btn-lg mb-3">
                  Sign In
                </Button>
              </Form>

              {/* Google Login */}
              <div className="mt-3">
                <Button color="light" block className="rounded-4 shadow-sm btn-outline-secondary mb-3">
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
                  <Button color="link" onClick={() => alert("Redirect to sign up page")} className="text-primary p-0">
                    Sign Up
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default LoginModal;
