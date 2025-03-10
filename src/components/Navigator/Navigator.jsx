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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && (
        <div className="navigator__overlay" onClick={closeMenu}></div>
      )}

      <nav
        className={`navigator ${menuOpen ? "navigator__open" : ""} ${isSavedArticlesPage ? "navigator__saved-articles" : ""}`}
      >
        <div className="navigator__container">
          <h2 className="navigator__logo">NewsExplorer</h2>
        </div>

        <button
          className={`navigator__menu-btn ${menuOpen ? "navigator__close-btn" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        ></button>

        <div className={`navigator__right-side ${menuOpen ? "open" : ""}`}>
          <ul className="navigator__link">
            <li className="navigator__items">
              <button
                className="navigator__home-btn"
                onClick={() => {
                  navigate("/");
                  closeMenu();
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
                    closeMenu();
                  }}
                >
                  Sign in
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button
                    className="navigator__saved-articles-btn"
                    onClick={() => {
                      navigate("/saved-articles");
                      closeMenu();
                    }}
                  >
                    Saved articles
                  </button>
                </li>
                <li className="navigator__user-info">
                  {user.name}
                  <span
                    className="navigator__logout-icon"
                    onClick={() => {
                      onLogout();
                      closeMenu();
                    }}
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigator;
