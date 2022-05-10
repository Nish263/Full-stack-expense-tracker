import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: " api get",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "post",
  });
});
router.delete("/", (req, res) => {
  res.json({
    message: "delete",
  });
});

export default router;
