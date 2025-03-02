const axios = require("axios");
const cheerio = require("cheerio");

const LYTICS_API_URL = "https://docs.lytics.com/";

const getLyticsData = async (question) => {
  try {
    const { data } = await axios.get(LYTICS_API_URL);
    const $ = cheerio.load(data);

    const content = $("h1, h2, h3, p").map((index, element) => {
      return $(element).text();
    }).get();

    const answer = content.find(paragraph => paragraph.toLowerCase().includes(question.toLowerCase()));

    return answer || "Sorry, I couldn't find an answer for that question.";
  } catch (error) {
    console.error("Error fetching Lytics data:", error);
    throw error;
  }
};

module.exports = { getLyticsData };