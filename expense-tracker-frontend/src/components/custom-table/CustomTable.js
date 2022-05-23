import React, { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExpenses,
  handleDeleteExpenses,
} from "../pages/dashboard/dashboardAction";

export const CustomTable = () => {
  const dispatch = useDispatch();

  const { expenses, res } = useSelector((state) => state.dashboard);
  const [ids, setIds] = useState([]);
  useEffect(() => {
    dispatch(fetchExpenses());
    res.status === "success" && setIds([]);
  }, [res]);

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this expense? "))
      return;
    dispatch(handleDeleteExpenses(ids));
  };

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    checked
      ? setIds([...ids, value])
      : setIds(ids.filter((id) => id !== value));
  };
  return (
    <div className="mt-5 custom-list fs-4">
      <ListGroup>
        {expenses.map((item, i) => (
          <ListGroupItem key={item._id} className="fw-bold">
            <Form.Check
              onClick={handleOnSelect}
              value={item._id}
              type="checkbox"
              label={item.name}
            />
            <span className="cost">
              {item.type === "expenses" ? "-" : ""}

              <Button variant="danger" onClick={() => handleOnDelete(item._id)}>
                {" "}
                <i class="fa-solid fa-trash"></i>
              </Button>
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
      <div className="mt-2 text-end">
        {ids.length > 0 && (
          <Button variant="danger" onClick={() => handleOnDelete(ids)}>
            Delete selected expenses
          </Button>
        )}
      </div>
    </div>
  );
};
