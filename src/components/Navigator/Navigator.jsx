import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Navigator.css";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function Navigator({ onSignIn, onLogout }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isSavedArticlesPage = location.pathname === "/saved-articles";
  const [menuOpen, setMenuOpen] = useState(false);
  const { width, height } = useWindowSize();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  function getRightColor() {
    if (menuOpen) {
      return "white";
    }
    if (isSavedArticlesPage) {
      return "#1a1b22";
    } else {
      ("white");
    }
  }

  return (
    <>
      {menuOpen && (
        <div className="navigator__overlay" onClick={() => {}}></div>
      )}

      <nav
        className={`navigator ${menuOpen ? "navigator_open" : ""} ${isSavedArticlesPage ? " navigator_page_saved-articles " : ""}`}
      >
        <div className="navigator__container">
          <h2
            style={{ color: `${getRightColor()}` }}
            className="navigator__logo"
          >
            NewsExplorer
          </h2>

          {width < 640 && (
            <button
              className={`${menuOpen ? "navigator__close-btn" : "navigator__menu-btn"}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            ></button>
          )}
          <div
            className={`.navigator__nav-items ${menuOpen ? ".navigator__nav-items_open" : ""}`}
          >
            <ul className="navigator__link">
              <li className="navigator__items">
                <button
                  style={{ color: `${getRightColor()}` }}
                  className={`navigator__home-btn ${!isSavedArticlesPage ? "navigator__home-btn_active" : ""}`}
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
                      style={{ color: `${getRightColor()}` }}
                      className={`navigator__saved-articles-btn ${isSavedArticlesPage ? "navigator__saved-articles-btn_active" : ""}`}
                      onClick={() => {
                        navigate("/saved-articles");
                        closeMenu();
                      }}
                    >
                      Saved articles
                    </button>
                  </li>
                  <li className="navigator__user-info">
                    <span
                      style={{ color: `${getRightColor()}` }}
                      className="navigator__user-name"
                    >
                      {user.name}
                    </span>
                    <span
                      className={`navigator__logout-icon ${
                        !isSavedArticlesPage
                          ? "navigator__logout-icon_white"
                          : "navigator__logout-icon_dark"
                      }`}
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
        </div>
      </nav>
    </>
  );
}

export default Navigator;
