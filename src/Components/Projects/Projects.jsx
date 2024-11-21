import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const tempArray = [];
const numOfProjects = 10;

// Populate the tempArray with placeholder data
for (let i = 1; i < numOfProjects; i++) {
  tempArray.push(i);
}

const oneCardWidthInCSS = 15; // Width of each card in vw

const Projects = () => {
  return (
    <section>
      <div className="sectionTitle">
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
      </div>

      <div className={styles.projects}>
        <h3>My Best Works Yet</h3>
        <div className={styles.projectsCards}>
          <div className={styles.cardsSlider}>
            {tempArray.map((item, index) => (
              <ProjectCard key={index} />
            ))}
          </div>
        </div>
        <div className={styles.buttons}>
          <button>&larr;</button>
          <button>&rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
