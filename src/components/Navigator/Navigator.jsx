import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Navigator.css";

function Navigator({ onSignIn, onLogout }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isSavedArticlesPage = location.pathname === "/saved-articles";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`navigator ${
        isSavedArticlesPage ? "navigator__saved-articles" : ""
      }`}
    >
      <div className="navigator__container">
        <h2 className="navigator__logo">NewsExplorer</h2>
      </div>

      <button
        className="navigator__dropdown"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      ></button>

      <div className={`navigator__right-side ${menuOpen ? "open" : ""}`}>
        <ul className="navigator__link">
          <li className="navigator__items">
            <button
              className={`navigator__home-btn ${
                isSavedArticlesPage ? "" : "navigator__home-btn_active"
              }`}
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
            >
              Home
            </button>
          </li>

          {!user ? (
            <li>
              <button
                className="navigator__signin-btn"
                onClick={() => {
                  onSignIn();
                  setMenuOpen(false);
                }}
              >
                Sign in
              </button>
            </li>
          ) : (
            <>
              <li>
                <button
                  className={`navigator__saved-articles-btn ${
                    isSavedArticlesPage
                      ? "navigator__saved-articles_active"
                      : ""
                  }`}
                  onClick={() => {
                    navigate("/saved-articles");
                    setMenuOpen(false);
                  }}
                >
                  Saved articles
                </button>
              </li>
              <li className="navigator__user-info">
                {user.name}
                <span
                  className={`navigator__logout-icon ${
                    isSavedArticlesPage
                      ? "navigator__logout-icon_dark"
                      : "navigator__logout-icon_white"
                  }`}
                  onClick={() => {
                    onLogout();
                    setMenuOpen(false);
                  }}
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigator;
