const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchArticles = async (query) => {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 7);
  const formattedFromDate = fromDate.toISOString().split("T")[0];
  const toDate = new Date().toISOString().split("T")[0];

  const url = `${BASE_URL}?q=${query}&from=${formattedFromDate}&to=${toDate}&pageSize=100&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
