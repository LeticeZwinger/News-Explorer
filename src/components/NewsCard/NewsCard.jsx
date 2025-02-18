import "./NewsCard.css";
function NewsCard({ title, text, image, date, source }) {
  return (
    <div className="newscard">
      <div className="newscard__image-container">
        <img src={image} alt={title} className="newscard__image" />
        <button
          className="newscard__bookmark-btn"
          title="Save article"
        ></button>
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
