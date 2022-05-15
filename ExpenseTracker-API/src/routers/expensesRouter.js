import express from "express";
import {
  createExpense,
  getExpense,
  deleteExpense,
} from "../../src/model/expensesModel/Expenses.Model.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to expense API get",
  });
});

router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;

    const result = await createExpense({ ...req.body, userId: authorization });

    result?._id
      ? res.json({
          status: "success",
          message: "Created expenses successfully",
        })
      : req.json({
          status: "error",
          message: "Error creating expenses, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", (req, res) => {
  res.json({
    message: "Welcome to expense API delete",
  });
});

export default router;
