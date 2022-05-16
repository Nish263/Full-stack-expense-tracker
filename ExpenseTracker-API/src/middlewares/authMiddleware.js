import { getUser } from "../model/userModel/User.Model.js";

export const useAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      // check in the database
      const user = await getUser(authorization);
      console.log(user);
      user?._id
        ? next()
        : res.status(403).json({
            status: "error",
            message: "you ar not authorised to access this resources",
          });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "you ar not authorised to access this resources",
    });
  }
};
