import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export const CustomTable = ({ expenses }) => {
  return (
    <div className="mt-5 custom-list fs-4">
      <ListGroup>
        {expenses.map((item, i) => (
          <ListGroupItem ket={i} className="fw-bold">
            <span className="title"> {item.name}</span>
            <span className="amount"> {item.amount}</span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
