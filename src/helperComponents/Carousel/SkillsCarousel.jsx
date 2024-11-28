import React, { useState } from "react";
import styles from "./SkillsCarousel.module.css";

const SkillsCarousel = ({ arrayOfObjects, modifierClass = "" }) => {
  // Give a modifier class if you wanna make change to the wrapper div
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
    <div className={`${modifierClass} ${styles.carousel}`}>
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
        <div className={styles.buttons}>
          <button
            onClick={handlePreviousImage}
            className={`circleButton`}
            style={currentImageIndex === 0 ? { opacity: "0%" } : null}
          >
            <p>&larr;</p>
          </button>

          <button
            onClick={handleNextImage}
            className={`circleButton`}
            style={
              currentImageIndex === arrayOfObjects.length - 1
                ? { opacity: "0%" }
                : null
            }
          >
            <p> &rarr;</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillsCarousel;
