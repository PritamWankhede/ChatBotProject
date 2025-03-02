const express = require("express");
const router = express.Router();
const lyticsController = require("../controllers/lyticsController");

router.get("/how-to", async (req, res) => {
  const { question } = req.query;
  try {
    const data = await lyticsController.getLyticsData(question);
    res.json({ answer: data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from Lytics" });
  }
});

module.exports = router;
