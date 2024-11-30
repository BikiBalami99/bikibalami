import React from "react";
import styles from "../Resume.module.css";

const Skills = () => {
  return (
    <section className={styles.body}>
      <h2>Skills</h2>

      <div className={styles.row}>
        <h3>Front-End Development</h3>
        <div className={styles.description}>
          <p>React.js, Typescript, JavaScript, HTML , CSS, Next.js, Redux</p>
        </div>
      </div>

      <div className={styles.row}>
        <h3>Other Coding Languages / Skills</h3>
        <div className={styles.description}>
          <p>Python, C, Java, Data Structures, Git</p>
        </div>
      </div>

      <div className={styles.row}>
        <h3>Graphic Design / Art</h3>
        <div className={styles.description}>
          <p>
            Figma, Photoshop, Illustrator, InDesign Blender3D, Drawing,
            Painting, Digital Art
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <h3>Soft Skills</h3>
        <div className={styles.description}>
          <p>
            Problem Solving, Creativity, Public Speaking Leading, Adaptive, Fast
            learner
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
