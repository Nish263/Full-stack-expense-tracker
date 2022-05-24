import React, { useState } from "react";
import { Row, Form, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postRegister } from "../helper/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingPending, setResponse } from "./userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
};
export const Register = () => {
  const dispatch = useDispatch();

  const { res, isLoading } = useSelector((state) => state.user);
  const [formData, setFormData] = useState(initialState);
  // const [isLoading, setIsLoading] = useState(false);
  // const [res, setRes] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    dispatch(setLoadingPending(true));

    // call api axios

    const { data } = await postRegister(formData);
    dispatch(setResponse(data));
    dispatch(setLoadingPending(false));
  };
  return (
    <Row className="login-comp mt-5">
      <Form onSubmit={handleOnSubmit}>
        <h3>Register Now</h3>
        <hr />
        {isLoading && <Spinner animation="border-primary" />}

        {res.message && (
          <Alert variant={res.status === "success" ? "success" : "danger"}>
            {res.message}
          </Alert>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleOnChange}
            placeholder="Enter Full Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleOnChange}
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleOnChange}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>

        <div className="text-end">
          Already have account? <Link to=" /register">Login </Link>
        </div>
      </Form>
    </Row>
  );
};
