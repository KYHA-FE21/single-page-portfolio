import "../styles/about.css";
import Doris from "../images/doris2.png";

const About = () => {
  return (
    <div id="about" className="about-grid">
      <img className="about-img" src={Doris} />
      <div className="container">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>
    </div>
  );
};

export default About;
