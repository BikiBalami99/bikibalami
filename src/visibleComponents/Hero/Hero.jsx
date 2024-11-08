import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.left}>
        <h3>Biki Balami</h3>
        <h2>GRAPHIC DESIGNER</h2>
        <h2>WEB DEVELOPER</h2>
        <p className={styles.email}>bikibalami1999@gmail.com</p>
        <div className={styles.heroDescription}>
          <span>Front-end | </span>
          <span>UI/UX | </span>
          <span>Computer Science</span>
        </div>
        <p>{"(Scroll Down)"}</p>
      </section>

      <section className={styles.right}>
        {/* Swapped the class names to reflect the new order */}
        <article className={styles.rightTop}>
          <ul>
            <li>Origin: Kathmandu, Nepal</li>
            <li>Residing: Tokyo, Japan</li>
            <li>Focus: React, JavaScript</li>
          </ul>
        </article>

        <section className={styles.rightBottom}>
          <div className={styles.socials}>
            <div className={styles.linkedIn}></div>
            <div className={styles.github}></div>
          </div>
          <button className={styles.resumeDownloadButton}>Download CV</button>
        </section>
      </section>
    </div>
  );
};

export default Hero;
