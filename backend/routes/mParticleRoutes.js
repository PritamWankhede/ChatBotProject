const express = require("express");
const router = express.Router();
const mParticleController = require("../controllers/mParticleController");

router.get("/how-to", async (req, res) => {
  const { question } = req.query;
  try {
    const data = await mParticleController.getMPArticleData(question);
    res.json({ answer: data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from mParticle" });
  }
});

module.exports = router;
