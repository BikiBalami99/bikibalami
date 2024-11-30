import React from "react";
import styles from "../Resume.module.css";

const WorkExperience = () => {
  return (
    <section className={styles.body}>
      <h2>Work Experience</h2>

      <div className={styles.row}>
        <div className={styles.titleWrapper}>
          <h3>Creative Advisor / Graphic Designer</h3>
          <div className={styles.workExpSubhead}>
            <h4>Newa Pasa (Restaurant)</h4>
            <p className={styles.duration}>2022 - now</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            Boosted sales by over 70% in 1 year by modernizing pricing and
            designing optimized printed menus using Photoshop and Illustrator.
            Streamlined complex set menu, enhancing server efficiency during
            rush hours and elevating the restaurant's appeal to time-constrained
            white-collar customers.
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.titleWrapper}>
          <h3>English Instructor</h3>
          <div className={styles.workExpSubhead}>
            <h4>Temple University Japan AEP</h4>
            <p className={styles.duration}>2021 - 2023</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            Managed classes of 16-20 students and supervised 2-3 junior teaching
            assistants during 6-hour courses. Ranked as a top class instructor
            in student surveys.
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.titleWrapper}>
          <h3>Creative Supervisor</h3>
          <div className={styles.workExpSubhead}>
            <h4>Uprizine</h4>
            <p className={styles.duration}>2021 - 2023</p>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            Directed and published four highly praised magazines, co-managing a
            feminist and human rights club of 40+ active members. Fostered a
            collaborative environment that empowered diverse students from many
            nations and cultures including America, Japan, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
