import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects";
import ProjectsCarousel from "../../helperComponents/Carousel/ProjectsCarousel";
import SectionTitle from "../../helperComponents/SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <section id="projects">
      {/* Title that goes left and write */}
      <SectionTitle title="PROJECTS" />
      <div className={styles.projects}>
        <h3>My Best Works Yet</h3>
        <p>
          More coming very soon. Meanwhile, Enjoy this carousel that I made.
        </p>
        <ProjectsCarousel arrayOfProjects={projects} />
      </div>
    </section>
  );
};

export default Projects;
