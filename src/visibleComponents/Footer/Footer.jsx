import React from "react";
import styles from "./Footer.module.css";
import linkedinLogo from "/assets/images/linkedinLogo.png";
import githubLogo from "/assets/images/githubLogo.png";

const Footer = () => {
  return (
    <>
      <div className="sectionTitle">
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
        <h2>Lets Talk</h2>
      </div>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <h3>Lets make something great together.</h3>
          <p>bikibalami1999@gmail.com</p>
        </div>

        <div className={styles.right}>
          <ul className={styles.navLinks}>
            <li>Home</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>My Story</li>
          </ul>
          <div className={styles.social}>
            <h3>Socials Links</h3>
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
          </div>
          <div>
            <p>© Biki Balami 2024</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
