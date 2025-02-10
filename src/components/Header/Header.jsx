import "./Header.css";
import Navigator from "../Navigator/Navigator";
import SearchBar from "../SearchBar/SeachBar";

function Header() {
  return (
    <header className="header" id="header">
      <Navigator />
      <div className="header-field">
        <div className="header__container">
          <h1 className="header__title">What's going on in the world?</h1>
          <p className="header__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
