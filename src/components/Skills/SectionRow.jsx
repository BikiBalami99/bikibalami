import React from "react";
import styles from "./Skills.module.css";
import CertificationCarousal from "./CertificationCarousal";
import TechIcons from "./TechIcons";

const SectionRow = ({ skillType }) => {
  return (
    <div className={styles.skillRow}>
      <div className={styles.images}>
        <CertificationCarousal skillType={skillType} />
        <TechIcons skillType={skillType} />
      </div>
      <div className={styles.description}>
        <h2>{skillType.title}</h2>
        <p>{skillType.description}</p>
      </div>
    </div>
  );
};

export default SectionRow;
