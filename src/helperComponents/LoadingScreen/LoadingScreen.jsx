import React, { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ isAppLoaded }) => {
  const [translateAmt, setTranslateAmt] = useState("0%");
  const [loadingScreenClass, setLoadingScreenClass] = useState(
    styles.loadingScreen
  );

  useEffect(() => {
    if (isAppLoaded) {
      triggerLoaderRemoval();
    }
  }, [isAppLoaded]);

  function triggerLoaderRemoval() {
    setTimeout(() => {
      setTranslateAmt("200%"); // Move the loading screen up
    }, 3000); // Match this duration with .loadingBar::after animation duration
  }

  return (
    <section
      style={{
        transform: `translateX(${translateAmt})`,
        transition: "transform 0.5s ease-in-out", // Smooth transition for the exit animation
      }}
      className={loadingScreenClass}
    >
      <p>Hello World.</p>
      <div className={styles.loadingBar}></div>
    </section>
  );
};

export default LoadingScreen;
