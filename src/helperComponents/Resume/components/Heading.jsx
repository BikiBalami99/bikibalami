import React from "react";
import styles from "../Resume.module.css";

const Heading = () => {
  return (
    <section className={styles.heading}>
      <div className={styles.headPhotoWrapper}>
        <img src="/assets/images/resume-head-photo.JPG" alt="" />
      </div>
      <div className={styles.headingBody}>
        <h1>Biki Balami</h1>

        <h2>Web Developer & Graphic Designer</h2>
        <p>
          “I am a web developer and a graphic designer with a focus on React,
          CSS and Javascript. I enjoy solving problems, researching, learning
          and optimization. Coming from a technical and creative background, I
          can effectively collaborate with professionals from diverse fields.”
        </p>

        <ul>
          <li>
            <div className={styles.iconWrapper}>
              <img
                className={styles.headingIcon}
                src="/assets/icons/ResumeIcons/reside.png"
                alt="Location Icon"
              />
            </div>
            <p>Reside: Tokyo, Japan</p>
            <p>From: Kathmandu, Nepal</p>
          </li>
          <li>
            <div className={styles.iconWrapper}>
              <img
                className={styles.headingIcon}
                src="/assets/icons/ResumeIcons/linkedin.png"
                alt="Linkedin Icon"
              />
            </div>
            <p>https://www.linkedin.com/in/biki-balami-1bb9281a3/</p>
          </li>
          <li>
            <div className={styles.iconWrapper}>
              <img
                className={styles.headingIcon}
                src="/assets/icons/ResumeIcons/mail.png"
                alt="Mail Icon"
              />
            </div>
            <p>bikibalami1999@gmail.com</p>
          </li>
          <li>
            <div className={styles.iconWrapper}>
              <img
                className={styles.headingIcon}
                src="/assets/icons/ResumeIcons/github.png"
                alt="github Icon"
              />
            </div>
            <p>https://bikibalami99.github.io/</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Heading;
