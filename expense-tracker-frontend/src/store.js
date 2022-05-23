import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/register/userSlice";
import dashboardSlice from "./components/pages/dashboard/dashboardSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardSlice,
  },
});

export default store;
