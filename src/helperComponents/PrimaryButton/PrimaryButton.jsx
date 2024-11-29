import React, { useEffect, useRef, useState } from "react";
import styles from "./PrimaryButton.module.css";

// Props description
// Children = text of the button
// onClick = onClick function
// Type = If any specific button type
// buttonModifierClass = if you wanna modify any style of the BUTTON, make a class and then give as a prop. It needs to be an object.
// textModifierClass same as buttonModifierClass for button text
const PrimaryButton = ({
  children,
  onClick,
  type = "",
  buttonModifierClass,
  textModifierClass,
  disabled,
}) => {
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
      desabled={disabled}
      ref={buttonRef}
      className={styles.primaryButton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      type={type}
      style={buttonModifierClass}
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
      <div style={{ opacity: 0, ...textModifierClass }}>{children}</div>
      {/* This above one has opacity 0 because, it is only to hold the shape of the button. */}

      <div style={textModifierClass} className={styles.children}>
        {children}
      </div>
    </button>
  );
};

export default PrimaryButton;
