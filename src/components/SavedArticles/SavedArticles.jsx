import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import NewsCard from "../NewsCard/NewsCard";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import "./SavedArticles.css";

function SavedArticles() {
  const { user } = useAuth();
  const [savedArticles, setSavedArticles] = useState([]);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    loadSavedArticles();
  }, []);

  const loadSavedArticles = () => {
    const storedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(storedArticles);

    const extractedKeywords = storedArticles.map((article) => article.keyword);
    const uniqueKeywords = [...new Set(extractedKeywords)];
    setKeywords(uniqueKeywords);
  };

  const handleRemoveArticle = () => {
    loadSavedArticles();
  };

  const formatKeywords = () => {
    if (keywords.length === 0) return "";
    if (keywords.length === 1) return keywords[0];
    if (keywords.length === 2) return `${keywords[0]}, ${keywords[1]}`;
    return `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} others`;
  };

  return (
    <div className="saved-articles__container">
      <Navigator />
      <div className="saved-articles__content">
        <h2 className="saved-articles__title">Saved articles</h2>
        <h1 className="saved-articles__header">
          {user?.name}, you have {savedArticles.length} saved articles
        </h1>
        {keywords.length > 0 && (
          <p className="saved-articles__keywords">
            By keywords: <strong>{formatKeywords()}</strong>
          </p>
        )}

        <section className="newscard-list">
          <section className="newscard-list__section">
            {savedArticles.length > 0 &&
              savedArticles.map((article, index) => (
                <NewsCard
                  key={index}
                  title={article.title}
                  text={article.text}
                  image={article.image}
                  date={article.date}
                  source={article.source}
                  keyword={article.keyword}
                  onRemove={handleRemoveArticle}
                />
              ))}
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default SavedArticles;
