import React from "react";
import styles from "../Resume.module.css";

const Education = () => {
  return (
    <section className={styles.body}>
      <h2>Education</h2>

      <div className={styles.row}>
        <h3>Front-End Development Bootcamp</h3>
        <div className={styles.description}>
          <p>Codecademy - Front End Engineer</p>
          <p className={styles.duration}>04/2024 - 10/2024</p>
        </div>
      </div>

      <div className={styles.row}>
        <h3>Front-End Courses</h3>
        <div className={styles.description}>
          <p>Codecademy - Learn React Course</p>
          <p className={styles.duration}>01/2024 - 08/2024</p>
        </div>
        <div className={styles.description}>
          <p>Codecademy - Learn Typescript Course</p>
          <p className={styles.duration}>07/2024 - 08/2024</p>
        </div>
        <div className={styles.description}>
          <p>Udemy - Mastering Typescript</p>
          <p className={styles.duration}>07/2024 - 08/2024</p>
        </div>
        <div className={styles.description}>
          <p>Codecademy - Learn Git & Github Course</p>
          <p className={styles.duration}>07/2024 - 08/2024</p>
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <h3>Bachelor of Arts Degree (3.5 GPA)</h3>
          <h4>Temple University Japan Campus</h4>
        </div>
        <div className={styles.description}>
          <p>Computer Science minor, Art major</p>
          <p className={styles.duration}>05/2019 - 12/2023</p>
        </div>
      </div>

      <div className={styles.row}>
        <h3>Graphic Design Courses</h3>
        <div className={styles.description}>
          <p>Udemy - Figma UI UX Design Advanced</p>
          <p className={styles.duration}>08/2023 - 09/2023</p>
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <h3>+2 College</h3>
          <h4>National School of Sciences</h4>
        </div>
        <div className={styles.description}>
          <p>Physics, Mathematics, Computer Science</p>
          <p className={styles.duration}>05/2016 - 06/2018</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
