import React from "react";
import styles from "./Projects.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <h4>Coming Soon</h4>
      <p>--</p>
      <div className={styles.thumbnail}>
        <img src="/assets/images/thumbnail.png" alt="Project Thumbnail" />
      </div>
    </div>
  );
};

export default ProjectCard;
