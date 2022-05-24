import React, { useEffect } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ExpensesForm } from "../../expenses-form/ExpensesForm";
import { CustomTable } from "../../custom-table/CustomTable";
import { useSelector } from "react-redux";

import { Alert, Spinner, Row } from "react-bootstrap";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { isLoading, res } = useSelector((state) => state.dashboard);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
    // fetchExpenses();
  }, [navigate]);

  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <hr />
      <Row className="mb-5">
        {isLoading && <Spinner variant="primary" animation="border" />}

        {res?.message && (
          <Alert variant={res.status === "success" ? "success" : "danger"}>
            {res?.message}
          </Alert>
        )}
      </Row>

      <ExpensesForm />
      <CustomTable />
    </MainLayout>
  );
};
