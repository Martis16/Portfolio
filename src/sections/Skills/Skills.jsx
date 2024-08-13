import styles from "./SkillsStyles.module.css";
import CshIcon from "../../assets/c--4.svg";
import SkillList from "../../common/SkillList.jsx";
import JSIcon from "../../assets/javascript-svgrepo-com.svg";
import HTMLIconDark from "../../assets/html.svg";
import HTMLIconLight from "../../assets/html-LIGHT.png";
import CSSIconDark from "../../assets/css.svg";
import CSSIconLight from "../../assets/css-light.png";
import JiraIconDark from "../../assets/jira-dark.svg";
import JiraIconLight from "../../assets/jira-svgrepo-com.svg";
import GithubImage from "../../assets/github-light.svg";
import GithubImageDark from "../../assets/github-dark.svg";
import GITIcon from "../../assets/gitIcon.svg";
import NETIcon from "../../assets/microsoft-dotnet.svg";
import NETCoreIcon from "../../assets/NET core.svg";
import ReactIcon from "../../assets/react-svgrepo-com.svg";
import BootIconDark from "../../assets/bootstrap.svg";
import BootIconLight from "../../assets/bootstrap-white.png";
import MUIIcon from '../../assets/material-ui.svg';
import { useTheme } from "../../common/ThemeContext.jsx";

function Skills() {
  const { theme, toggleTheme } = useTheme();

  const GithubIcon = theme === "light" ? GithubImage : GithubImageDark;
  const JiraIcon = theme === "light" ? JiraIconDark : JiraIconLight;
  const HTMLIcon = theme === "light" ? HTMLIconDark : HTMLIconLight;
  const CSSIcon = theme === "light" ? CSSIconDark : CSSIconLight;
  const BootIcon = theme === "light" ? BootIconDark : BootIconLight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={CshIcon} skill="C#" />
        <SkillList src={JSIcon} skill="JavaScript" />
        <SkillList src={HTMLIcon} skill="HTML" />
        <SkillList src={CSSIcon} skill="CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={NETIcon} skill=".NET" />
        <SkillList src={NETCoreIcon} skill=".NET Core" />
        <SkillList src={ReactIcon} skill="React" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={GithubIcon} skill="Github" />
        <SkillList src={GITIcon} skill="Git" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={BootIcon} skill="Bootstrap" />
        <SkillList src={MUIIcon} skill="Material MUI" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={JiraIcon} skill="Jira" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
