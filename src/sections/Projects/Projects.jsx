import React from "react";
import styles from "./ProjectsStyles.module.css";
import hotelsbookings from "../../assets/HoBookLight.svg";
import ElderHealthIcon from "../../assets/LogoHD.png";
import ProjectsCard from "../../common/ProjectCard";
import DeathTraffic from "../../assets/deathtraffic.jpg";
import railsFriends from "../../assets/2.png";
import Auto321 from '../../assets/321autoImage.png';
import VintedHomework from '../../assets/Vinted_logo.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>

      <h3 className=""> Recent Solo projects </h3>

      <div className={styles.projectsContainer}>
        <ProjectsCard
          src={hotelsbookings}
          link="https://github.com/Martis16/HotelsBookings"
          h3="HoBook"
          p="A website to book a hotel"
        />

        <ProjectsCard
          src={Auto321}
          link="https://321auto.lt"
          h3="321auto"
          p="A website for a small car dealership"
        />
        <ProjectsCard
          src={VintedHomework}
          link="https://github.com/Martis16/VintedHomeWork"
          h3="Vinted's homework"
          p="A module for calculating shipment's discounts"
        />
      </div>

        <h3 className=""> Group projects </h3>

      <div className={styles.projectsContainer}>
        <ProjectsCard
          src={ElderHealthIcon}
          link="https://github.com/Cipekaje/elderhealthnext-app"
          h3="ElderHealthCompanion"
          p="A website/app to monitor health and connect with doctors"
        />
        <br />
        <ProjectsCard
          src={DeathTraffic}
          link="https://github.com/Martis16/DeathTraffic_Unity_Game"
          h3="DeathTraffic"
          p="A racing game with points"
        />
      </div>
    </section>
  );
}

export default Projects;
