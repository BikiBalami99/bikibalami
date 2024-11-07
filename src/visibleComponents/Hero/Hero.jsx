import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.left}>
        <h3>Biki Balami</h3>
        <h2>GRAPHIC DESIGNER</h2>
        <h2>WEB DEVELOPER</h2>
        <div className={styles.heroDescription}>
          <span>Front-end | </span>
          <span>UI/UX | </span>
          <span>Computer Science</span>
        </div>
        <p>{"(Scroll Down)"}</p>
      </section>

      <section className={styles.right}>
        <section className={styles.rightTop}>
          <span className={styles.email}>bikibalami1999@gmail.com</span>
          <div className={styles.socials}>
            <button className={styles.resumeDownloadButton}>Resume</button>
            <div className={styles.linkedIn}></div>
            <div className={styles.github}></div>
          </div>
        </section>

        <article className={styles.rightBottom}>
          <ul>
            <li>
              <strong>Origin:</strong> Kathmandu, Nepal
            </li>
            <li>
              <strong>Residing:</strong> Tokyo, Japan
            </li>
            <li>
              <strong>Focus:</strong> React, JavaScript
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Hero;
