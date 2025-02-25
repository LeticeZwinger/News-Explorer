let savedArticles = [
  {
    _id: "65f7368dfb74bd6a92114c85",
    title: "Some news article",
    text: "This is a saved news article description.",
    image: "https://via.placeholder.com/150",
    date: "2025-02-01",
    source: "Example Source",
    link: "https://example.com",
  },
];

export const getSavedArticles = () => {
  return new Promise((resolve) => {
    resolve(savedArticles);
  });
};

export const saveArticle = (article) => {
  return new Promise((resolve) => {
    const newArticle = {
      ...article,
      _id: Math.random().toString(36).substring(2, 9),
    };
    savedArticles.push(newArticle);
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    resolve(newArticle);
  });
};

export const deleteArticle = (articleId) => {
  return new Promise((resolve) => {
    savedArticles = savedArticles.filter(
      (article) => article._id !== articleId,
    );
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    resolve({ message: "Article deleted" });
  });
};
