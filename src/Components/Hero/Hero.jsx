import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import linkedinLogo from "/assets/images/linkedinLogo.png";
import githubLogo from "/assets/images/githubLogo.png";
import PrimaryButton from "../../helperComponents/PrimaryButton/PrimaryButton";
import Resume from "../../helperComponents/Resume/Resume";

const Hero = () => {
  const [isDialogOn, setIsDialogOn] = useState(false);
  const resumeDialogRef = useRef();

  useEffect(() => {
    if (isDialogOn) {
      resumeDialogRef.current.showModal();
      // Disable body scroll by setting overflow and preventing default scroll behavior
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`; // Keep the scroll position intact
    } else {
      resumeDialogRef.current.close();
      // Re-enable body scroll and reset position
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(document.body.style.top || "0") * -1); // Restore the scroll position
    }
  }, [isDialogOn]);

  function handleDownloadResume() {
    const link = document.createElement("a");
    link.href = "/assets/Resume/Biki_Balami_Resume.pdf";
    link.download = "Biki_Balami_Resume.pdf";
    link.click();
  }
  return (
    <section className={styles.hero}>
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
          <PrimaryButton onClick={() => setIsDialogOn(true)}>
            Resume
          </PrimaryButton>
        </section>
      </section>

      <dialog ref={resumeDialogRef} className={styles.resumeDialog}>
        <div className={styles.resumeModalHeading}>
          <h1>Digital Resume</h1>
          <p>
            This is a responsive digital resume. If you want a pdf, hit the
            download button. Thank you.
          </p>
          <PrimaryButton onClick={handleDownloadResume}>Download</PrimaryButton>
        </div>
        <Resume />
        <form method="dialog">
          <button
            onClick={() => {
              setIsDialogOn(false);
            }}
            className={`${styles.closeButton} circleButton`}
          >
            <p>&times;</p>
          </button>
        </form>
      </dialog>
    </section>
  );
};

export default Hero;
