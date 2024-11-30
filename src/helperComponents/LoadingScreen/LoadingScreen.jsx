import React, { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ isAppLoaded }) => {
  const [translateAmt, setTranslateAmt] = useState("0%");

  useEffect(() => {
    if (isAppLoaded) {
      setTimeout(() => {
        setTranslateAmt("200%"); // Move the loading screen right
      }, 3000);
      // Match this duration with .loadingBar::after animation duration
    }
  }, [isAppLoaded]);

  return (
    <section
      style={{
        transform: `translateX(${translateAmt})`,
        transition: "transform 0.5s ease-in-out", // Smooth transition for the exit animation
      }}
      className={styles.loadingScreen}
    >
      <div className={styles.helloWorldWrapper}>
        <p className={styles.helloWorld}>Hello World</p>
      </div>

      <div className={styles.loadingBar}></div>
    </section>
  );
};

export default LoadingScreen;
