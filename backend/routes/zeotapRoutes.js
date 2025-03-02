const express = require("express");
const router = express.Router();
const zeotapController = require("../controllers/zeotapController");

router.get("/how-to", async (req, res) => {
  const { question } = req.query;
  try {
    const data = await zeotapController.getZeotapData(question);
    res.json({ answer: data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from Zeotap" });
  }
});

module.exports = router;
