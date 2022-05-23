import React, { useEffect } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../pages/dashboard/dashboardAction";

export const CustomTable = ({ handleOnDelete }) => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  return (
    <div className="mt-5 custom-list fs-4">
      <ListGroup>
        {expenses.map((item, i) => (
          <ListGroupItem ket={i} className="fw-bold">
            <span className="title"> {item.name}</span>
            <span className="amount"> {item.amount}</span>
            <Button variant="danger" onClick={() => handleOnDelete(item._id)}>
              {" "}
              <i class="fa-solid fa-trash"></i>
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
