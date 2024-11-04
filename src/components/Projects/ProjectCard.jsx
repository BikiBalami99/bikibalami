import React from "react";
import styles from "./Projects.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <h4>Title</h4>
      <p>Description</p>
      <img src={"src/assets/svgs/thumbnail.svg"} alt="icon" />
    </div>
  );
};

export default ProjectCard;
