import React from "react";
import { ListGroup } from "react-bootstrap";

export const CustomTable = () => {
  return (
    <div className="mt-5 custom-list fs-4">
      <ListGroup className="custom-list">
        <ListGroup.Item>
          <span className="title">TV shopping </span>
          <span className="cost">$3200 </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="title">TV shopping </span>
          <span className="cost">$3200 </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="title">TV shopping </span>
          <span className="cost">$3200 </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="title">TV shopping </span>
          <span className="cost">$3200 </span>
        </ListGroup.Item>
        <ListGroup.Item className="fw-bolder">
          <span className="title">Total</span>
          <span className="cost">$12800 </span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
