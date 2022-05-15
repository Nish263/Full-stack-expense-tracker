import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to expense API get",
  });
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Welcome to expense API post",
  });
});
router.delete("/", (req, res) => {
  res.json({
    message: "Welcome to expense API delete",
  });
});

export default router;
