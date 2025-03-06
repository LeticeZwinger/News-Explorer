import { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { fetchArticles } from "../../utils/newsApi";
import Preloader from "../Preloader/Preloader";
import "./NewsCardList.css";

function NewsCardList({ searchQuery = "" }) {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      setArticles([]);
      return;
    }
    setLoading(true);
    setError("");
    setNoResults(false);

    fetchArticles(searchQuery)
      .then((fetchedArticles) => {
        if (fetchedArticles.length === 0) {
          setNoResults(true);
        } else {
          setArticles(fetchedArticles);
        }
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError(
          error.message.includes("Failed to fetch")
            ? "Network error. Please check your connection."
            : "Sorry, something went wrong. Please try again later.",
        );
      })
      .finally(() => setLoading(false));
  }, [searchQuery]);

  const displayedArticles = articles.slice(0, visibleCount);

  return (
    <div
      className={`newscard-list ${articles.length > 0 ? "has-results" : "no-results"}`}
    >
      {articles.length > 0 && (
        <h2 className="newscard-list__header">Search Results</h2>
      )}

      {loading && <Preloader />}
      {error && <p className="newscard-list__error">{error}</p>}
      {noResults && (
        <div className="newscard-list__nothing-found">
          <h3 className="newscard-list__nothing-title">Nothing Found</h3>
          <p className="newscard-list__nothing-text">
            Sorry, but nothing matches your search terms.
          </p>
        </div>
      )}

      <section className="newscard-list__section">
        {displayedArticles.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            text={article.description}
            image={article.urlToImage}
            date={new Date(article.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            source={article.source.name}
            searchQuery={searchQuery}
          />
        ))}
      </section>

      {articles.length > visibleCount && (
        <button
          className={`newscard-list__show-more ${
            visibleCount >= articles.length
              ? "newscard-list__show-more_disabled"
              : ""
          }`}
          onClick={() => setVisibleCount((prev) => prev + 3)}
          disabled={visibleCount >= articles.length}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
