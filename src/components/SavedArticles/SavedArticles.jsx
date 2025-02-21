import { useEffect, useState } from "react";

import NewsCard from "../NewsCard/NewsCard";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import "./SavedArticles.css";

function SavedArticles() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const storedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(storedArticles);
  }, []);

  const handleRemove = (titleToRemove) => {
    const updatedArticles = savedArticles.filter(
      (article) => article.title !== titleToRemove,
    );
    setSavedArticles(updatedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
  };

  return (
    <div className="saved-articles-page">
      <Navigator />
      <section className="newscard-list">
        <h2 className="newscard-list__header">Saved Articles</h2>
        <section className="newscard-list__section">
          {savedArticles.length > 0 ? (
            savedArticles.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                text={article.text}
                image={article.image}
                date={article.date}
                source={article.source}
                onRemove={() => handleRemove(article.title)}
              />
            ))
          ) : (
            <p className="saved-articles__empty">
              You have no saved articles yet.
            </p>
          )}
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default SavedArticles;
