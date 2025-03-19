import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import "./SavedArticles.css";

function SavedArticles({ onLogout }) {
  const { user } = useAuth();
  const [savedArticles, setSavedArticles] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setSavedArticles([]);
      setKeywords([]);
      return;
    }

    const userKey = `savedArticles_${user.email}`;
    const storedArticles = JSON.parse(localStorage.getItem(userKey)) || [];
    setSavedArticles(storedArticles);

    const extractedKeywords = storedArticles
      .map((article) => article.keyword)
      .filter((keyword) => keyword && keyword.trim() !== "");

    const uniqueKeywords = [...new Set(extractedKeywords)];
    setKeywords(uniqueKeywords);
  }, [user]);

  const handleRemoveArticle = (articleToRemove) => {
    if (!user) return;

    const userKey = `savedArticles_${user.email}`;
    const storedArticles = JSON.parse(localStorage.getItem(userKey)) || [];

    const updatedArticles = storedArticles.filter(
      (article) => article.title !== articleToRemove.title,
    );

    localStorage.setItem(userKey, JSON.stringify(updatedArticles));
    setSavedArticles(updatedArticles);
  };
  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
      navigate("/");
    } else {
      console.error("onLogout is undefined");
    }
  };

  const formatKeywords = () => {
    if (keywords.length === 0) return "";
    if (keywords.length === 1) return keywords[0];
    if (keywords.length === 2) return `${keywords[0]}, ${keywords[1]}`;
    return `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} others`;
  };

  return (
    <div
      className={`saved-articles ${savedArticles.length > 0 ? "has-results" : "no-results"}`}
    >
      <Navigator onLogout={handleLogoutClick} />
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
      </div>

      <section className="newscard-list">
        <div className="newscard-list__container">
          <ul className="newscard-list__section">
            {savedArticles.length > 0 &&
              savedArticles.map((article, index) => (
                <li key={index} className="newscard-list__item">
                  <NewsCard
                    title={article.title}
                    text={article.text}
                    image={article.image}
                    date={article.date}
                    source={article.source}
                    keyword={article.keyword}
                    onRemove={() => handleRemoveArticle(article)}
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SavedArticles;
