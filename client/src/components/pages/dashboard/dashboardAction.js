import {
  getExpense,
  postExpense,
  deleteExpense,
} from "../../helper/axiosHelper";
import { requestPending, setExpenses, setResponse } from "./dashboardSlice";

export const fetchExpenses = () => async (dispatch) => {
  dispatch(requestPending());
  const { status, expenses } = await getExpense();

  status === "success" && dispatch(setExpenses(expenses));
};

export const handleOnPost = (formData) => async (dispatch) => {
  dispatch(requestPending());
  const data = await postExpense(formData);
  // setIsLoading(false);
  dispatch(setResponse(data));
  data.status === "success" && dispatch(fetchExpenses());
};

export const handleDeleteExpenses = (ids) => async (dispatch) => {
  dispatch(requestPending());
  const data = await deleteExpense(ids);
  dispatch(setResponse(data));
  data.status === "success" && dispatch(fetchExpenses());
};
