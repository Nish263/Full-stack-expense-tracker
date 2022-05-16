import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const userApi = rootUrl + "/users";
const loginApi = rootUrl + "/users/login";
const expensesAPI = rootUrl + "/expenses";

// ========user apis==============

export const postRegister = (formData) => {
  try {
    return axios.post(userApi, formData);
  } catch (error) {
    return {
      data: {
        status: "error",
        message: error.message,
      },
    };
  }
};
export const postLogin = (formData) => {
  try {
    return axios.post(loginApi, formData);
  } catch (error) {
    const data = {
      status: "error",
      message: error.message,
    };
    return {
      data,
    };
  }
};

// export const postExpense =async FormData =>{
//   try {

//   } catch (error) {

//   }
// }

// ==========expense api============

export const postExpense = async (formData) => {
  console.log(formData);
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.post(expensesAPI, formData, {
      headers: {
        Authorization: user._id,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      data: {
        status: "error",
        message: "error.message",
      },
    };
  }
};

export const getExpense = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.get(expensesAPI, {
      headers: {
        Authorization: user._id,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      data: {
        status: "error",
        message: error.message,
      },
    };
  }
};

export const deleteExpense = async (_id) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { data } = await axios.delete(expensesAPI + "/" + _id, {
      headers: {
        Authorization: user._id,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      data: {
        status: "error",
        message: error.message,
      },
    };
  }
};
