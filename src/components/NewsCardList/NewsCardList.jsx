import { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { getArticles } from "../../utils/newsApi";
import "./NewsCardList.css";

function NewsCardList({ searchQuery = "" }) {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);

  // Fetch articles when searchQuery changes
  useEffect(() => {
    const fetchArticles = async () => {
      if (searchQuery) {
        setLoading(true);
        const fetchedArticles = await getArticles(searchQuery);
        setArticles(fetchedArticles);
        setVisibleCount(3); // Reset visible count when new search happens
        setLoading(false);
      } else {
        setArticles([]); // Clear articles if search query is empty
      }
    };

    fetchArticles();
  }, [searchQuery]);

  // Slice articles to show based on visibleCount
  const displayedArticles = articles.slice(0, visibleCount);

  return (
    <div className="newscard-list">
      {articles.length > 0 && (
        <div className="newscard-list__header">Search Results</div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="newscard-list__section">
          {displayedArticles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              text={article.description}
              image={article.urlToImage}
              date={new Date(article.publishedAt).toDateString()}
              source={article.source.name}
            />
          ))}
        </section>
      )}

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
