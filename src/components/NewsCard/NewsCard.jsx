import "./NewsCard.css";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function NewsCard({ title, text, image, date, source, keyword, onRemove }) {
  const { user } = useAuth();
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const isSavedArticlesPage = location.pathname === "/saved-articles";

  const handleSaveClick = () => {
    if (!user) {
      return;
    }

    const updatedSavedState = !isSaved;
    setIsSaved(updatedSavedState);

    if (updatedSavedState) {
      const savedArticles =
        JSON.parse(localStorage.getItem("savedArticles")) || [];
      const article = { title, text, image, date, source, keyword };
      savedArticles.push(article);
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    } else {
      const savedArticles =
        JSON.parse(localStorage.getItem("savedArticles")) || [];
      const updatedArticles = savedArticles.filter(
        (item) => item.title !== title,
      );
      localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
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
    <div className="newscard">
      <div className="newscard__image-container">
        <img src={image} alt={title} className="newscard__image" />

        {isSavedArticlesPage ? (
          <button
            className="newscard__trash-btn"
            title="Remove article"
            onClick={handleRemove}
          >
            <span className="newscard__trash-tooltip">Remove from saved</span>
          </button>
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
      </div>
      <p className="newscard__source">{source}</p>
    </div>
  );
}

export default NewsCard;
