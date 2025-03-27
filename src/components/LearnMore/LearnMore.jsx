import "./LearnMore.css";
function LearnMore() {
  return (
    <div className="learn-more">
      <h1 className="learn-more__title">About my history</h1>
      <p>My history</p>
      <h2 className="learn-more__subtitle">professonal sumary</h2>
      <p className="learn-more__paragraph">detailed professional</p>
      <h2 className="learn-more__subtitle">professional experience</h2>
      <p className="learn-more__paragraph">detailed professional xp</p>
      <h2 className="learn-more__subtitle">education</h2>
      <p className="learn-more__paragraph">detailed education</p>
      <ul className="learn-more__skill">
        <h2 className="learn-more__subtitle">List of skills</h2>
        <li className="learn-more__skill-item">JavaScript</li>
        <p className="learn-more__skill-description"> JavaScript description</p>
        <li className="learn-more__skill-item">React</li>
        <p className="learn-more__skill-description"> React description</p>
        <li className="learn-more__skill-item">Node.js</li>
        <p className="learn-more__skill-description"> Node.js description</p>
        <li className="learn-more__skill-item">Figma design</li>
        <p className="learn-more__skill-description">
          Figma design description
        </p>
        <li className="learn-more__skill-item">REST api</li>
        <p className="learn-more__skill-description"> REST api description</p>
      </ul>
    </div>
  );
}

export default LearnMore;
