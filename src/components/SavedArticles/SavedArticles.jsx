import { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import "./SavedArticles.css";

function SavedArticles() {
  const { user } = useAuth();
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(articles);
  }, []);

  return (
    <section className="saved-articles">
      <h2>Saved Articles</h2>
      <p>
        {user?.name}, you have {savedArticles.length} article
        {savedArticles.length !== 1 && "s"} saved.
      </p>
    </section>
  );
}

export default SavedArticles;
