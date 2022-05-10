import React, { useEffect } from "react";
import { MainLayout } from "../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ExpensesForm } from "../expenses-form/ExpensesForm";
import { CustomTable } from "../custom-table/CustomTable";

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <hr />
      <ExpensesForm />
      <CustomTable />
    </MainLayout>
  );
};
