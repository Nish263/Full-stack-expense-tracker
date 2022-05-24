import ExpensesSchema from "./ExpensesSchema.js";

// CRUD

// expenses should be an object
export const createExpense = (expenses) => {
  return ExpensesSchema.create(expenses);
};

// filetre must be an object , that should atleast contains the userId
export const getExpense = (filter) => {
  return ExpensesSchema.find(filter);
};
export const deleteExpense = (filter) => {
  return ExpensesSchema.findOneAndDelete(filter);
};

export const deleteManyExpenses = (userId, itemIds) => {
  return ExpensesSchema.deleteMany({ userId, _id: { $in: itemIds } });
};
