import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="sectionTitle">
        <h2>Projects</h2>
        <h2>Projects</h2>
        <h2>Projects</h2>
      </div>

      <div className={styles.projects}>
        <h3>My Best Works Yet</h3>
        <div className={styles.projectsCards}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
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
