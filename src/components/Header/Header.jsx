import { useNavigate } from "react-router-dom";
import "./Header.css";
import Navigator from "../Navigator/Navigator";
import SearchBar from "../SearchBar/SearchBar";

function Header({ onSignIn, setSearchQuery }) {
  return (
    <header className="header" id="header">
      <Navigator onSignIn={onSignIn} />
      <div className="header-field">
        <div className="header__container">
          <h1 className="header__title">What's going on in the world?</h1>
          <p className="header__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
      </div>
    </header>
  );
}

export default Header;
