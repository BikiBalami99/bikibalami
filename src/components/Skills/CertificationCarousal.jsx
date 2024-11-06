import React, { useState } from "react";
import styles from "./Skills.module.css";

const CertificationCarousal = ({ skillType: { certificates } }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function increaseCurrentImgIndex() {
    if (currentImgIndex !== certificates.length - 1) {
      setCurrentImgIndex((prev) => prev + 1);
    }
  }

  function decreaseCurrentImgIndex() {
    if (currentImgIndex !== 0) {
      setCurrentImgIndex((prev) => prev - 1);
    }
  }

  return (
    <div className={styles.certificatesCarousal}>
      <div
        className={styles.certificateImages}
        style={{ transform: `translateX(${currentImgIndex * -100}%)` }}
      >
        {certificates.map((certificate) => {
          return (
            <img
              key={certificate.title}
              src={certificate.certificate}
              className={styles.aCertificate}
            />
          );
        })}
      </div>

      {certificates.length > 1 && (
        <>
          <button
            onClick={decreaseCurrentImgIndex}
            className={styles.leftArrow}
          >
            &larr;
          </button>
          <button
            onClick={increaseCurrentImgIndex}
            className={styles.rightArrow}
          >
            &rarr;
          </button>
        </>
      )}
    </div>
  );
};

export default CertificationCarousal;
