import React, { useEffect, useState } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExpenses,
  handleDeleteExpenses,
} from "../pages/dashboard/dashboardAction";

export const CustomTable = () => {
  const dispatch = useDispatch();

  const { expenses, res } = useSelector((state) => state.dashboard);
  const [ids, setIds] = useState([]);

  const [display, setDisplay] = useState("all"); //income or expense
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

  const incomeArg = expenses.filter((item) => item.type === "income");
  const expenseArg = expenses.filter((item) => item.type === "expenses");

  const transaction = {
    all: expenses,
    income: incomeArg,
    expenses: expenseArg,
  };

  return (
    <div className="mt-5 custom-list fs-4">
      <div className="btn-group pb-3">
        <ButtonGroup aria-label="Basic example">
          <Button onClick={() => setDisplay("all")} variant="info">
            All
          </Button>
          <Button onClick={() => setDisplay("income")} variant="info">
            Income
          </Button>
          <Button onClick={() => setDisplay("expenses")} variant="info">
            Expense
          </Button>
          <div>{display} transaction</div>
        </ButtonGroup>
      </div>
      <ListGroup>
        {transaction[display].map((item, i) => (
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
