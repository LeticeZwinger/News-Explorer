import "./NewsCard.css";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function NewsCard({
  title,
  text,
  image,
  date,
  source,
  keyword,
  searchQuery,
  onRemove,
}) {
  const { user } = useAuth();
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const isSavedArticlesPage = location.pathname === "/saved-articles";

  const handleSaveClick = () => {
    if (!user) return;

    const updatedSavedState = !isSaved;
    setIsSaved(updatedSavedState);

    const userKey = `savedArticles_${user.email}`;
    const savedArticles = JSON.parse(localStorage.getItem(userKey)) || [];

    if (updatedSavedState) {
      const article = {
        title,
        text,
        image,
        date,
        source,
        keyword: searchQuery,
      };

      savedArticles.push(article);
      localStorage.setItem(userKey, JSON.stringify(savedArticles));
    } else {
      const updatedArticles = savedArticles.filter(
        (item) => item.title !== title,
      );
      localStorage.setItem(userKey, JSON.stringify(updatedArticles));
    }
  };

  const handleRemove = () => {
    if (isSavedArticlesPage) {
      const savedArticles =
        JSON.parse(localStorage.getItem("savedArticles")) || [];
      const updatedArticles = savedArticles.filter(
        (item) => item.title !== title,
      );

      localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
      onRemove();
    }
  };

  return (
    <article className="newscard">
      <div className="newscard__image-container">
        <img src={image} alt={title} className="newscard__image" />

        {isSavedArticlesPage ? (
          <div>
            <span className="newscard__keyword">{keyword}</span>
            <button
              className="newscard__trash-btn"
              title="Remove article"
              onClick={onRemove}
            >
              <span className="newscard__trash-tooltip">Remove from saved</span>
            </button>
          </div>
        ) : (
          <button
            className={`newscard__bookmark-btn ${
              isSaved ? "newscard__bookmark-btn_saved" : ""
            }`}
            title="Save article"
            onClick={handleSaveClick}
          >
            {!user && (
              <span className="newscard__signin-tip">
                Sign in to save articles
              </span>
            )}
          </button>
        )}
      </div>
      <div className="newscard__content">
        <p className="newscard__date">{date}</p>
        <h2 className="newscard__title">{title}</h2>
        <p className="newscard__text">{text}</p>
        <p className="newscard__source">{source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
