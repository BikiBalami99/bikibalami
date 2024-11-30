import React from "react";
import Heading from "./components/Heading";
import styles from "./Resume.module.css";
import Education from "./components/Education";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Awards from "./components/Awards";
import Languages from "./components/Languages";

const Resume = () => {
  return (
    <section className={styles.resume}>
      <Heading />
      <div className={styles.main}>
        <div className={styles.colOne}>
          <Education />
          <WorkExperience />
        </div>

        <div className={styles.colTwo}>
          <Skills />
          <Awards />
          <Languages />
        </div>
      </div>
    </section>
  );
};

export default Resume;
