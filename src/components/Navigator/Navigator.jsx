import "./Navigator.css";
function Navigator({ onSignUp, onSignIn }) {
  return (
    <nav className="navigator">
      <div className="navigator__container">
        <h2 className="navigator__logo">NewsExplorer</h2>
      </div>

      <div className="navigator__right-side">
        <ul className="navigator__link">
          <li className="navigator__items">
            <button className="navigator__home-btn">Home</button>
          </li>
          <li>
            <button className="navigator__signin-btn" onClick={onSignIn}>
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigator;
