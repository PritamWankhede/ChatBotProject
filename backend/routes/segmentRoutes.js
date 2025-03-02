const express = require("express");
const router = express.Router();
const segmentController = require("../controllers/segmentController");

router.get("/how-to", async (req, res) => {
  const { question } = req.query;
  try {
    const data = await segmentController.getSegmentData(question);
    res.json({ answer: data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from Segment" });
  }
});

module.exports = router;
