import { Link } from "react-router-dom";

import authorImage from "../../assets/author.jpg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img
          className="about__image"
          src={authorImage}
          alt="author image"
        ></img>
      </div>
      <div className="about__content">
        <h2 className="about__title">About The Author</h2>
        <p className="about__paragraph">
          Letice is a web developer passionate about building modern,
          user-friendly applications. She has experience working with React,
          JavaScript, Node.js.
        </p>
        <p className="about__paragraph">
          Recently completed an intensive bootcamp at TripleTen. Through the
          program, she gained hands-on experience in full-stack development,
          best coding practices, and real-world project implementation. Now, she
          applies her skills to create efficient and engaging digital
          experiences. Whether it's developing a clean and functional website or
          optimizing user interaction.
        </p>
        <Link to="/learn-more" className="about__link">
          Learn more 👩🏻‍💻
        </Link>
      </div>
    </section>
  );
}

export default About;
