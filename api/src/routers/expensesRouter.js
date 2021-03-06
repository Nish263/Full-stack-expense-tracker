import express from "express";
const router = express.Router();
import {
  createExpense,
  getExpense,
  deleteManyExpenses,
} from "../../src/model/expensesModel/Expenses.Model.js";

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    // model get all expenses of userId authorization

    const expenses = await getExpense({ userId: authorization });
    res.json({
      status: "success",
      expenses,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
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

router.delete("/", async (req, res) => {
  try {
    const ids = req.body;

    const { authorization } = req.headers;

    const data = await deleteManyExpenses(authorization, ids);

    data?.deletedCount
      ? res.json({
          status: "success",
          message: " expenses deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Error deleting expenses, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
