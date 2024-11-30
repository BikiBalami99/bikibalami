import React from "react";
import styles from "../Resume.module.css";

const Awards = () => {
  return (
    <section className={styles.body}>
      <h2>Awards and Achievements</h2>

      <div className={styles.row}>
        <div className={styles.titleWrapper}>
          <h3>
            Hult Prize On-Campus <span className={styles.duration}>(2021)</span>
          </h3>
          <h4>1st place.</h4>
        </div>
        <div className={styles.description}>
          <p>
            Collaborated as part of a team of four to develop a sustainable
            business model aimed at addressing the global plastic bottle crisis.
            Our innovative solution secured the top position in the competition.
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.titleWrapper}>
          <h3>
            Dean's List <span className={styles.duration}>(2021)</span>
          </h3>
        </div>
        <div className={styles.description}>
          <p>
            Recognized for exceptional academic performance with a GPA of 3.75,
            placing among the top 16% of students in the College of Science and
            Technology from 2016 - 2021.
          </p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.titleWrapper}>
          <h3>
            Undergraduate Scholarship (TUJ){" "}
            <span className={styles.duration}>(2016 - 2021)</span>
          </h3>
        </div>
        <div className={styles.description}>
          <p>
            Awarded a scholarship of $1,500 per semester for consistent academic
            excellence throughout my undergraduate studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
