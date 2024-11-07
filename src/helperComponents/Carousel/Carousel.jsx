import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ arrayOfObjects, sizeClass = "" }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handlePreviousImage() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  }

  function handleNextImage() {
    if (currentImageIndex < arrayOfObjects.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <div className={`${styles.carousel} ${sizeClass}`}>
      <div
        className={styles.images}
        style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}
      >
        {arrayOfObjects.map((eachObject) => (
          <img
            key={eachObject.title}
            src={eachObject.image}
            className={`${styles.image}`}
            alt={eachObject.title}
          />
        ))}
      </div>

      {arrayOfObjects.length > 1 && (
        <>
          <button
            onClick={handlePreviousImage}
            className={styles.leftArrow}
            style={currentImageIndex === 0 ? { opacity: "0%" } : null}
          >
            <div>&lt;</div>
          </button>

          <button
            onClick={handleNextImage}
            className={styles.rightArrow}
            style={
              currentImageIndex === arrayOfObjects.length - 1
                ? { opacity: "0%" }
                : null
            }
          >
            <div> &gt;</div>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
