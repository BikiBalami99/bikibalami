import React from "react";
import styles from "./Projects.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <h4>Title</h4>
      <p>Description</p>
      <div className={styles.thumbnail}></div>
    </div>
  );
};

export default ProjectCard;
