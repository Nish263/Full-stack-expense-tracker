import React from "react";
import { Row, Form, Button, Spinner, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../helper/axiosHelper";
import { useRef, useState } from "react";
import {
  setLoadingPending,
  setResponse,
  loginSuccessResponse,
} from "../register/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { res, isLoading } = useSelector((state) => state.user);

  const handleOnSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return alert("Please enter the emaila and password");
    }

    dispatch(setLoadingPending(true));
    const { data } = await postLogin({ email, password });

    if (data.status === "success") {
      const { name, email, _id } = data.user;
      dispatch(loginSuccessResponse(data.user));
      sessionStorage.setItem("user", JSON.stringify({ name, email, _id }));

      navigate("/dashboard");
      return;
      //   if loging success , store userdata in sessionstorage else show the error messag
    }
    setError(data.message);
    dispatch(setResponse(data));
  };
  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3>Welcome Back</h3>
        <hr />
        {isLoading && <Spinner animation="border" variant="primary" />}
        {res?.message && <Alert variant="danger">{res?.message} </Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleOnSubmit}>
          Login
        </Button>
        <div className="text-end">
          New Here ? <Link to="/register">Register</Link>
        </div>
      </Form>
    </Row>
  );
};
