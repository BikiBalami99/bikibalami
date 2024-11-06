import React from "react";
import styles from "./Skills.module.css";

const TechIcons = ({ skillType }) => {
  return (
    <div className={styles.techIcons}>
      {skillType.techIcons.map((tech) => {
        return (
          <div className={styles.eachTech} key={tech.title}>
            <img src={tech.icon} alt={tech.title} />
            <p>{tech.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TechIcons;
