const axios = require("axios");
const cheerio = require("cheerio");

const MPARTICLE_API_URL = "https://docs.mparticle.com/";

const getMPArticleData = async (question) => {
  try {
    const { data } = await axios.get(MPARTICLE_API_URL);
    const $ = cheerio.load(data);

    const content = $("h1, h2, h3, p").map((index, element) => {
      return $(element).text();
    }).get();

    const answer = content.find(paragraph => paragraph.toLowerCase().includes(question.toLowerCase()));

    return answer || "Sorry, I couldn't find an answer for that question.";
  } catch (error) {
    console.error("Error fetching mParticle data:", error);
    throw error;
  }
};

module.exports = { getMPArticleData };
