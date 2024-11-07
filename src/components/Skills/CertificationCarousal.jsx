import React, { useState } from "react";
import styles from "./Skills.module.css";
import Carousel from "../Utilities/Carousel";

const CertificationCarousalOld = ({ skillType: { certificates } }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Functions that change the current certificate thumbnail being show.
  function handlePreviousImage() {
    if (currentImgIndex !== 0) {
      setCurrentImgIndex((prevIndex) => prevIndex - 1);
    }
  }
  function handleNextImage() {
    if (currentImgIndex !== certificates.length - 1) {
      setCurrentImgIndex((prevIndex) => prevIndex + 1);
    }
  }

  function openModal(certificates) {
    document.getElementById("certificatePreviewModal").showModal();
  }

  return (
    <div className={styles.certificatesCarousal}>
      <div
        className={styles.certificateImages}
        style={{ transform: `translateX(${-currentImgIndex * 100}%)` }}
      >
        {certificates.map((certificate) => {
          return (
            <>
              <img
                key={certificate.title}
                src={certificate.certificate}
                className={styles.aCertificate}
                onClick={openModal}
              />
            </>
          );
        })}
      </div>

      {certificates.length > 1 && (
        <>
          <button onClick={handlePreviousImage} className={styles.leftArrow}>
            &larr;
          </button>
          <button onClick={handleNextImage} className={styles.rightArrow}>
            &rarr;
          </button>
        </>
      )}

      <dialog id="certificatePreviewModal">
        {certificates.map((certificate) => {
          return (
            <div>
              <div>
                <img src={certificate.certificate} alt={certificate.title} />
              </div>
              {certificates.length > 1 && (
                <>
                  <button className={styles.leftArrow}>&larr;</button>
                  <button className={styles.rightArrow}>&rarr;</button>
                </>
              )}
            </div>
          );
        })}
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

const CertificationCarousal = ({ skillType: { certificates } }) => {
  return (
    <div>
      <Carousel arrayOfObjects={certificates} />
    </div>
  );
};

export default CertificationCarousal;
