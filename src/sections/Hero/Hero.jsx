import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/222.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import LinkedInImage from "../../assets/linkedin-light.svg";
import LinkedInImageDark from "../../assets/linkedin-dark.svg";
import GithubImage from "../../assets/github-light.svg";
import GithubImageDark from "../../assets/github-dark.svg";
import LeetCodeImageDark from "../../assets/leetcode (1).png";
import LeetCodeImageLight from "../../assets/leetcodeDark.svg";
import CV from "../../assets/CV_en.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const ThemeIcon = theme === "light" ? sun : moon;
  const LinkedInIcon = theme === "light" ? LinkedInImage : LinkedInImageDark;
  const GithubIcon = theme === "light" ? GithubImage : GithubImageDark;
  const LeetCodeIcon =
    theme === "light" ? LeetCodeImageLight : LeetCodeImageDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.colorModeDiv}>
          <img
            className={styles.colorMode}
            src={ThemeIcon}
            alt="day&night icon"
            onClick={toggleTheme}
          />
        </div>
        <img className={styles.hero} src={heroImg} alt="profile picture" />
      </div>
      <div className={styles.info}>
        <h1>
          Martynas <br /> Burneika
        </h1>
        <h2>Software/Web developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/martynas-burneika-454bab292/"
            target="_blank"
          >
            <img src={LinkedInIcon} alt="" />
          </a>
          <a href="https://github.com/Martis16" target="_blank">
            <img src={GithubIcon} alt="" />
          </a>
          <a href="https://leetcode.com/u/martis16/" target="_blank">
            <img src={LeetCodeIcon} alt="" />
          </a>
        </span>

        <p className={styles.description}>
          Creative software engineer with a knack for solving complex problems.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
