import React, { useEffect, useRef, useState } from "react";
import styles from "./ProjectsCarousel.module.css";

const ProjectsCarousel = ({ arrayOfProjects }) => {
  // State management
  const [movingPartPosition, setMovingPartPosition] = useState(0);
  const [stoppingDistance, setStoppingDistance] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardWidth, setCardWidth] = useState(250);
  const [gap, setGap] = useState(16);
  // gap is also used as padding
  const [goLeftOk, setGoLeftOk] = useState(false);
  const [goRightOk, setGoRightOk] = useState(false);

  // Animation for when we reach left or right edge
  const [triggerLeftBounce, setTriggerLeftBounce] = useState(false);
  const [triggerRightBounce, setTriggerRightBounce] = useState(false);

  const carouselRef = useRef();

  // Making responsive card size
  useEffect(() => {
    if (windowWidth <= 450) {
      setCardWidth(250);
      setGap(16);
    } else {
      setCardWidth(300);
      setGap(32);
    }
  }, [windowWidth]);

  const moveDistance = cardWidth + gap + 1;

  useEffect(() => {
    const carouselWidth = carouselRef.current.getBoundingClientRect().width;
    const maxCardsOnView = Math.floor(carouselWidth / (cardWidth + gap));
    const totalCards = arrayOfProjects.length;
    const initialHiddenCards = totalCards - maxCardsOnView;
    const stoppingDist = cardWidth * -initialHiddenCards;
    setStoppingDistance(stoppingDist);
  }, [arrayOfProjects, windowWidth, cardWidth, gap]);

  // To fix the bug where the left and right buttons act weird after resizing the window
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Finding out whether the left and right button should work
  useEffect(() => {
    if (movingPartPosition < 0) {
      setGoLeftOk(true);
    } else {
      setGoLeftOk(false);
    }

    if (movingPartPosition > 0) {
      setMovingPartPosition(0);
    }

    if (movingPartPosition > stoppingDistance) {
      setGoRightOk(true);
    } else {
      setGoRightOk(false);
    }
  });

  // Event handlers
  const handleLeftClick = () => {
    if (goLeftOk) {
      setMovingPartPosition((prev) => prev + moveDistance);
      setTriggerLeftBounce(false);
    } else {
      setTriggerLeftBounce(true);
      setTimeout(() => setTriggerLeftBounce(false), 300);
      // Reset animation after 300ms
      // Always match this setTimeout time with the animation time
    }
  };

  const handleRightClick = () => {
    if (goRightOk) {
      setMovingPartPosition((prev) => prev - moveDistance);
      setTriggerRightBounce(false);
    } else {
      setTriggerRightBounce(true);
      setTimeout(() => setTriggerRightBounce(false), 300);
      // Reset animation after 300ms
      // Always match this setTimeout time with the animation time
    }
  };

  // Render
  return (
    <div ref={carouselRef} className={styles.projectsCarousel}>
      <div
        className={`${styles.movingPart} ${
          triggerLeftBounce ? styles.triggerBounceLeft : ""
        } ${triggerRightBounce ? styles.triggerBounceRight : ""}`}
        style={{
          transform: `translateX(${movingPartPosition}px)`,
          transition: "transform 500ms cubic-bezier(0.3, 1.8, 0.3, 0.7)",
          gap: `${gap}px`,
          padding: `${gap}px`,
        }}
      >
        {arrayOfProjects.map((data) => (
          <div
            key={data.id}
            className={styles.card}
            style={{
              width: `${cardWidth}px`,
              background: data.background,
            }}
          >
            <h4 className={styles.cardTitle}>{data.title}</h4>
            <p className={styles.cardDescription}>{data.description}</p>
            <div className={styles.thumbnailWrapper}>
              <img src={data.thumbnail} alt="Thumbnail of current project" />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.leftRightButtons}>
        <button onClick={handleLeftClick} className="circleButton">
          <p> &larr;</p>
        </button>
        <button onClick={handleRightClick} className="circleButton">
          <p> &rarr;</p>
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
