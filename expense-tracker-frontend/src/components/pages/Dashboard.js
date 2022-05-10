import React, { useEffect } from "react";
import { MainLayout } from "../layout/MainLayout";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
  }, []);

  return (
    <MainLayout>
      <h1>Dashboard</h1>
    </MainLayout>
  );
};
