import React from "react";
import styles from "../Resume.module.css";

const Languages = () => {
  return (
    <section className={styles.body}>
      <h2>Languages</h2>
      <div className={styles.languageContainer}>
        <div className={`${styles.languageRow} ${styles.languageHeader}`}>
          <div className={styles.languageColumn}>Language</div>
          <div className={styles.languageColumn}>Fluency</div>
        </div>
        <div className={styles.languageRow}>
          <div className={styles.languageColumn}>English</div>
          <div className={styles.languageColumn}>Fluent</div>
        </div>
        <div className={styles.languageRow}>
          <div className={styles.languageColumn}>Japanese</div>
          <div className={styles.languageColumn}>Conversational</div>
        </div>
        <div className={styles.languageRow}>
          <div className={styles.languageColumn}>Hindi</div>
          <div className={styles.languageColumn}>Intermediate</div>
        </div>
        <div className={styles.languageRow}>
          <div className={styles.languageColumn}>Nepali</div>
          <div className={styles.languageColumn}>Native</div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
