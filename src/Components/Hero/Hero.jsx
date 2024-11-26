import React from "react";
import styles from "./Hero.module.css";
import linkedinLogo from "/assets/images/linkedinLogo.png";
import githubLogo from "/assets/images/githubLogo.png";
import PrimaryButton from "../../helperComponents/PrimaryButton/PrimaryButton";

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
          <span>Computer Science </span>
        </div>
        <p className={styles.scrollDown}>{"(Scroll Down)"}</p>
      </section>

      <section className={styles.right}>
        {/* Swapped the class names to reflect the new order */}
        <article className={styles.rightTop}>
          <p>
            <strong>Origin:</strong> Kathmandu, Nepal
          </p>
          <p>
            <strong>Residing:</strong> Tokyo, Japan
          </p>
          <p>
            <strong>Focus:</strong> React, JavaScript
          </p>
        </article>

        <section className={styles.rightBottom}>
          <div className={styles.socialLinks}>
            <div className={styles.socialsLinkIcon}>
              <a
                href="https://www.linkedin.com/in/biki-balami-1bb9281a3/"
                target="_blank"
              >
                <img src={linkedinLogo} />
              </a>
            </div>
            <div className={styles.socialsLinkIcon}>
              <a href="https://github.com/BikiBalami99" target="_blank">
                <img src={githubLogo} />
              </a>
            </div>
          </div>
          <PrimaryButton>Resume</PrimaryButton>
        </section>
      </section>
    </div>
  );
};

export default Hero;
