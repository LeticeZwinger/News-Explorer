import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader__container">
      <div className="preloader__circle"></div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
