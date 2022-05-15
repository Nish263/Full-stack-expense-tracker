import ExpensesSchema from "./ExpensesSchema.js";

// CRUD

// expenses should be an o
export const createExpense = async (expenses) => {
  return ExpensesSchema.create(expenses);
};
