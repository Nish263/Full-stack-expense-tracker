import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleOnPost } from "../pages/dashboard/dashboardAction";

const initialState = {
  name: "",
  amount: "",
  date: "",
};
export const ExpensesForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(handleOnPost(formData));
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-3 bg-info p-4 rounded pb-5">
          <Col md="2">
            <Form.Select
              aria-label="Default select example"
              onChange={handleOnChange}
              name="type"
              required
            >
              <option>Select one</option>
              <option value="1">Income</option>
              <option value="2">Expenses</option>
            </Form.Select>
          </Col>
          <Col md="4">
            <Form.Control
              type="text"
              class="form-control"
              placeholder=" expenses name"
              name="name"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col MD="2">
            <Form.Control
              type="number"
              class="form-control"
              placeholder=" amount"
              name="amount"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="2">
            <Form.Control
              type="date"
              class="form-control"
              placeholder=" date"
              name="date"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
