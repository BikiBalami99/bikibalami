import React, { useState } from "react";
import styles from "./Skills.module.css";

const CertificationCarousal = ({ skillType: { certificates } }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  // Functions that change the current certificate thumbnail being shown
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

  // Function to open the modal onClick
  function openModal(index) {
    setModalImgIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  }

  // Modal navigation functions
  function increaseModalImgIndex() {
    if (modalImgIndex !== certificates.length - 1) {
      setModalImgIndex((prev) => prev + 1);
    }
  }

  function decreaseModalImgIndex() {
    if (modalImgIndex !== 0) {
      setModalImgIndex((prev) => prev - 1);
    }
  }

  return (
    <div className={styles.certificatesCarousal}>
      <div
        className={styles.certificateImages}
        style={{ transform: `translateX(${currentImgIndex * -100}%)` }}
      >
        {certificates.map((certificate, index) => {
          return (
            <img
              key={certificate.title}
              src={certificate.certificate}
              className={styles.aCertificate}
              onClick={() => openModal(index)}
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

      {/* Modal preview */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <img
              src={certificates[modalImgIndex].certificate}
              alt="Large Certificate"
              className={styles.modalImage}
            />

            {/* Conditionally render the left and right arrows inside the modal */}
            {certificates.length > 1 && (
              <>
                <button
                  onClick={decreaseModalImgIndex}
                  className={styles.leftArrow}
                >
                  &larr;
                </button>
                <button
                  onClick={increaseModalImgIndex}
                  className={styles.rightArrow}
                >
                  &rarr;
                </button>
              </>
            )}

            <div className={styles.closeButtonContainer}>
              <button onClick={closeModal} className={styles.closeButton}>
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationCarousal;
