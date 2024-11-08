import React from "react";
import styles from "./Projects.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <h4>Coming Soon</h4>
      <p>--</p>
      <div className={styles.thumbnail}></div>
    </div>
  );
};

export default ProjectCard;
