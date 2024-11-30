import React, { useState, useRef, useEffect } from "react";
import styles from "./Footer.module.css";
import linkedinLogo from "/assets/images/linkedinLogo.png";
import githubLogo from "/assets/images/githubLogo.png";
import SectionTitle from "../../helperComponents/SectionTitle/SectionTitle";
import PrimaryButton from "../../helperComponents/PrimaryButton/PrimaryButton";
import LetsTalk from "../../helperComponents/LetsTalk/LetsTalk";

const year = new Date().getFullYear();

const Footer = () => {
  // Toggles Lets Talk form visibility
  const [letsTalkVisibility, setLetsTalkVisibility] = useState(false);

  const letsTalkRef = useRef();

  function toggleLetsTalkVisibility() {
    setLetsTalkVisibility((prev) => !prev);
  }

  useEffect(() => {
    if (letsTalkVisibility && letsTalkRef.current) {
      letsTalkRef.current.showModal();
    } else if (letsTalkRef.current) {
      letsTalkRef.current.close();
    }
  }, [letsTalkVisibility]);

  return (
    <section>
      <SectionTitle title={"LET'S TALK"} />
      <footer className={styles.footer}>
        <div className={styles.left}>
          <h3>Lets make something great together.</h3>

          <p>bikibalami1999@gmail.com</p>

          <PrimaryButton onClick={toggleLetsTalkVisibility}>
            Lets Talk
          </PrimaryButton>
        </div>

        <div className={styles.right}>
          <div className="socialLinks">
            <div className="socialsLinkIcon">
              <a
                href="https://www.linkedin.com/in/biki-balami-1bb9281a3/"
                target="_blank"
              >
                <img src={linkedinLogo} />
              </a>
            </div>

            <div className="socialsLinkIcon">
              <a href="https://github.com/BikiBalami99" target="_blank">
                <img src={githubLogo} />
              </a>
            </div>
          </div>

          <ul className={styles.navLinks}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Biki Balami {year}</p>
          </div>
        </div>
        {letsTalkVisibility && (
          <dialog ref={letsTalkRef} className={styles.letsTalkModule}>
            <LetsTalk onClose={toggleLetsTalkVisibility} />
            <form method="dialog">
              <button
                className={`circleButton ${styles.letsTalkCloseButton}`}
                onClick={toggleLetsTalkVisibility}
              >
                <p>&times;</p>
              </button>
            </form>
          </dialog>
        )}
      </footer>
    </section>
  );
};

export default Footer;
