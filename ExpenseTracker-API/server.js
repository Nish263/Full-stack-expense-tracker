import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

// setup middleware
import cors from "cors";
import morgan from "morgan";

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// DB connection
import { dbConnection } from "./src/config/db.js";

dbConnection();

// api's
import UserRouter from "./src/routers/UserRouter.js";

app.use("/api/v1/users", UserRouter);
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 NOT FOUND</h1>");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server is running on port ${PORT}`);
});