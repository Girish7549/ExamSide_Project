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
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";

function SignupModal({ showModal, toggle }) {
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
    <Modal isOpen={showModal} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle} className="text-center">
        <h4>Create Your Account</h4>
      </ModalHeader>
      <ModalBody className="bg-light rounded-4">
        <Row className="justify-content-center">
          <Col md={12}>
            <Card className="">
              <CardBody>
                <CardTitle tag="h4" className="text-center mb-3">
                  Signup
                </CardTitle>
                <CardText className="text-center mb-4">
                  Hey there! Ready to join the party? We just need a few details
                  from you to get started. Let's do this!
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
                          className="rounded-4"
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
                          className="rounded-4"
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
                      className="rounded-4"
                      placeholder="Enter your email"
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
                        className="rounded-4"
                        required
                      />
                      <div className="input-group-append">
                        <Button
                          type="button"
                          onClick={handleClickShowPassword}
                          color="link"
                          className="input-group-text rounded-4"
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
                        className="rounded-4"
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
                    className="rounded-4 mt-3"
                  >
                    Sign Up
                  </Button>
                </Form>

                {/* Sign-up redirect */}
                <div className="text-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <Button
                      color="link"
                      onClick={() => alert("Redirect to login page")}
                    >
                      Login
                    </Button>
                  </p>
                </div>

                {/* Google Sign-In Button */}
                <Button
                  block
                  color="secondary"
                  className="mt-2 rounded-4"
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
      </ModalBody>
    </Modal>
  );
}

export default SignupModal;
