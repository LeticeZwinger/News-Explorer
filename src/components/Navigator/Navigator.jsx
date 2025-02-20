import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Navigator.css";

function Navigator({ onSignIn }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navigator">
      <div className="navigator__container">
        <h2 className="navigator__logo">NewsExplorer</h2>
      </div>

      <div className="navigator__right-side">
        <ul className="navigator__link">
          <li className="navigator__items">
            <button
              className="navigator__home-btn"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </li>

          {!user ? (
            <li>
              <button className="navigator__signin-btn" onClick={onSignIn}>
                Sign in
              </button>
            </li>
          ) : (
            <>
              <li>
                <button
                  className="navigator__saved-articles"
                  onClick={() => navigate("/saved-articles")}
                >
                  Saved articles
                </button>
              </li>
              <li className="navigator__user-info">
                {user.name}
                <span
                  className="navigator__logout-icon"
                  onClick={handleLogout}
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
