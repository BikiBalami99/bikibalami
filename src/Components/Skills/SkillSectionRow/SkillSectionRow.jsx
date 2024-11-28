import React from "react";
import CertificationCarousal from "../CertificationCarousal/CertificationCarousal";
import TechIcons from "../TechIcons/TechIcons";
import styles from "./SkillSectionRow.module.css";

const SkillSectionRow = ({ skillType }) => {
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

export default SkillSectionRow;
