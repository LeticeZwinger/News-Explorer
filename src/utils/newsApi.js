import axios from "axios";

const API_KEY = "ce808405c52e4a0d8087b439a7ac0b85";
const BASE_URL = "https://newsapi.org/v2";

export const getArticles = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey: API_KEY,
        pageSize: 100,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};
