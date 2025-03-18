import "./Footer.css";
import facebookIcon from "../../assets/facebook.svg";
import githubIcon from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer__info">
          &copy; 2025 Supersite, Powered by News API
        </p>
      </div>

      <nav className="footer__nav">
        <ul className="footer__link-list">
          <li>
            <a href="#header" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              TripleTen
            </a>
          </li>

          <li>
            <a
              href="https://github.com/LeticeZwinger"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon"
            >
              <img src={githubIcon} alt="GitHub" className="footer__icon-img" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="footer__icon-img"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
