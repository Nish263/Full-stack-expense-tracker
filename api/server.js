import "dotenv/config";
import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

// setup middleware

import path from "path";
const __dirname = path.resolve();
console.log(__dirname);

// seti\up middleware
import cors from "cors";
import morgan from "morgan";

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// DB connection
import { dbConnection } from "./src/config/db.js";

dbConnection();

// middlewares
import { useAuth } from "./src/middlewares/authMiddleware.js";
// api's
import UserRouter from "./src/routers/UserRouter.js";
import ExpensesRouter from "./src/routers/ExpensesRouter.js";

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/expenses", ExpensesRouter);

app.use(
  express.static(path.resolve(__dirname, "./expense-tracker-frontend/build"))
);

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./expense-tracker-frontend/build", "index.html")
  );
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`server is running on port ${PORT}`);
});
