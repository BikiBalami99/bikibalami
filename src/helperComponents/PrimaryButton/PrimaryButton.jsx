import React, { useEffect, useRef, useState } from "react";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverStyleTop, setHoverStyleTop] = useState(0);
  const [hoverStyleLeft, setHoverStyleLeft] = useState(0);
  const buttonRef = useRef(null);
  const hoverBallSize = 80;

  useEffect(() => {
    if (!isHovered) return;

    function handleMouseMove(e) {
      const currentMouseX = e.clientX;
      const currentMouseY = e.clientY;

      // Getting the button's cordinates
      const buttonCoordinates = buttonRef.current.getBoundingClientRect();
      const buttonX = buttonCoordinates.left;
      const buttonY = buttonCoordinates.top;

      setHoverStyleTop(currentMouseY - buttonY - hoverBallSize / 2);
      setHoverStyleLeft(currentMouseX - buttonX - hoverBallSize / 2);
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <button
      ref={buttonRef}
      className={styles.primaryButton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.hoverStyle}
        style={{
          top: hoverStyleTop,
          left: hoverStyleLeft,
          opacity: isHovered ? 1 : 0,
          transformOrigin: "center",
          transform: isHovered ? "scale(1)" : "scale(0)",
        }}
      ></div>
      <p style={{ opacity: 0 }}>{children}</p>
      {/* This above one has opacity 0 because, it is only to hold the shape of the button. */}

      <p className={styles.children}>{children}</p>
    </button>
  );
};

export default PrimaryButton;
