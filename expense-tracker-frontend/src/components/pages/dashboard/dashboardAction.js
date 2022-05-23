import { getExpense } from "../../helper/axiosHelper";
import { setExpenses } from "./dashboardSlice";

export const fetchExpenses = () => async (dispatch) => {
  const { statys, expenses } = await getExpense();

  status === "success" && setExpenses(expenses);
};
