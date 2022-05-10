import ExpensesSchema from "./ExpensesSchema";

// export const insertExpense = (obj) => {
//   return ExpensesSchema(obj).save();
// };

// @expense should be an object
export const createExpense = (expense) => {
  return ExpensesSchema.create(expense);
};

// @filter must be an obj , that should atleast contain the user id
export const getExpense = (filter) => {
  return ExpensesSchema.find(filter);
};
// @expenses must be an object , that should atleast contain the userid and expense id
export const deleteExpenses = (filter) => {
  return ExpensesSchema.find(filter);
};
