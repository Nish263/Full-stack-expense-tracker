import mongoose from "mongoose";

export const dbConnection = () => {
  console.log(process.env.MONGO_ClIENT);
  try {
    const conString = process.env.MONGO_ClIENT;
    const con = mongoose.connect(conString);
    con && console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
