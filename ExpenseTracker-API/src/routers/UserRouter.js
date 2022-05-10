import express from "express";
import { findUser, insertUser } from "../model/User.Model.js";
const router = express.Router();

// router.all("/", (req, res, next) => {
//   console.log("user router got hit");
//   next();
// });

// create a user

// get a user
router.get("/", (req, res) => {
  res.send("login User");
});

// register a user
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "user registered succesfully",
        })
      : res.json({
          status: "error",
          message: "User registration failed, please try again later",
        });
  } catch (error) {
    console.log(error.email);
    let message = error.message;
    if (error.message.includes("duplicate key error collection")) {
      message = "User already exists using the email";
    }
    res.json({
      status: "error",
      message,
    });
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const user = await findUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          user,
        })
      : res.json({
          status: "error",
          message: "invaid login credential",
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
