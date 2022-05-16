import React, { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ExpensesForm } from "../expenses-form/ExpensesForm";
import { CustomTable } from "../custom-table/CustomTable";
import { getExpense, postExpense } from "../helper/axiosHelper";
import { Alert, Spinner, Row } from "react-bootstrap";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [resp, setResp] = useState({
    status: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);

  const fetchExpenses = async () => {
    const data = await getExpense();
  };
  const handleOnPost = async (formData) => {
    console.log("submit", formData);
    setIsLoading(true);
    const data = await postExpense(formData);
    setIsLoading(false);
    setResp(data);
  };

  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <hr />
      <Row className="mb-5">
        {isLoading && <Spinner variant="primary" animation="border" />}

        {resp?.message && (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {resp?.message}
          </Alert>
        )}
      </Row>

      <ExpensesForm handleOnPost={handleOnPost} />
      <CustomTable />
    </MainLayout>
  );
};
