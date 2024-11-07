import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ arrayOfObjects }) => {
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
    <div className={styles.carousel}>
      <div
        className={styles.images}
        style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}
      >
        {arrayOfObjects.map((eachObject) => (
          <img
            key={eachObject.title}
            src={eachObject.image}
            className={styles.image}
            alt={eachObject.title}
          />
        ))}
      </div>

      {arrayOfObjects.length > 1 && (
        <>
          <button onClick={handlePreviousImage} className={styles.leftArrow}>
            &larr;
          </button>
          <button onClick={handleNextImage} className={styles.rightArrow}>
            &rarr;
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
