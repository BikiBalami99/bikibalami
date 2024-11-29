import React, { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ isAppLoaded }) => {
  const [translateAmt, setTranslateAmt] = useState(0);

  useEffect(() => {
    let timeoutid;

    if (isAppLoaded) {
      timeoutid = setTimeout(() => {
        setTranslateAmt("-100%");
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutid);
    };
  }, [isAppLoaded]);

  return (
    <section
      style={{
        transform: `translateY(${translateAmt})`,
      }}
      className={styles.loadingScreen}
    >
      <p>Hello World.</p>
      <div className={styles.loadingBar}></div>
    </section>
  );
};

export default LoadingScreen;
