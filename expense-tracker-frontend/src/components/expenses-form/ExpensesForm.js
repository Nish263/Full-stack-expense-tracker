import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export const ExpensesForm = () => {
  return (
    <div>
      <Row className="g-3 bg-info p-4 rounded ">
        <Col md="4">
          <Form.Control
            type="text"
            class="form-control"
            placeholder=" expenses name"
            required
          />
        </Col>
        <Col MD="2">
          <Form.Control
            type="number"
            class="form-control"
            placeholder=" amount"
            required
          />
        </Col>
        <Col md="4">
          <Form.Control
            type="date"
            class="form-control"
            placeholder=" amount"
            required
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
};
