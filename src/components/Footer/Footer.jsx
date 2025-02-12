import "./Footer.css";
import facebookIcon from "../../assets/facebook.svg";
import githubIcon from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__info">
          &copy; 2025 Supersite, Powered by News API
        </p>
      </div>

      <div className="footer__right">
        <div className="footer__txt-links">
          <a href="#header" className="footer__link">
            Home
          </a>

          <a
            className="footer__link"
            href="https://tripleten.com"
            target="_blank"
          >
            TripleTen
          </a>
        </div>

        <a
          href="https://github.com/LeticeZwinger"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
        >
          <img src={githubIcon} alt="GitHub" className="footer__icon-img" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__icon"
        >
          <img src={facebookIcon} alt="Facebook" className="footer__icon-img" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
