import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  res: {
    status: "",
    message: "",
  },

  isLoading: false,
  user: {},
};

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoadingPending: (state) => {
      state.isLoading = true;
    },
    setResponse: (state, action) => {
      //   state.isLoading = false;
      state.res = action.payload;
    },
    loginSuccessResponse: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});

const { actions, reducer } = userslice;
export const {
  setLoadingPending,
  setResponse,loginSuccessResponse,
} = actions;
export default reducer;
