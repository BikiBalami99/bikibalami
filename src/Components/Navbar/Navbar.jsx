import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import Hamburger from "../../helperComponents/Hamburger/Hamburger";
import PrimaryButton from "../../helperComponents/PrimaryButton/PrimaryButton";
import LetsTalk from "../../helperComponents/LetsTalk/LetsTalk";

const Navbar = () => {
  // This state handles show/hide navLinks on mobile
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggles Lets Talk form visibility
  const [letsTalkVisibility, setLetsTalkVisibility] = useState(false);

  const letsTalkRef = useRef();

  function toggleNavBarView() {
    setIsExpanded((prev) => !prev);
  }

  function toggleLetsTalkVisibility() {
    setLetsTalkVisibility((prev) => !prev);
  }

  useEffect(() => {
    if (letsTalkVisibility && letsTalkRef.current) {
      letsTalkRef.current.showModal();
    } else if (letsTalkRef.current) {
      letsTalkRef.current.close();
    }
  }, [letsTalkVisibility]);

  return (
    <nav className={styles.navBar} data-expanded={isExpanded}>
      <a href="#" className={styles.logo}>
        <h1>Biki Balami</h1>
      </a>

      <ul className={styles.navItems}>
        <Hamburger toggleNavBarView={toggleNavBarView} />

        <div className={styles.navLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <PrimaryButton onClick={toggleLetsTalkVisibility}>
              Lets Talk
            </PrimaryButton>
          </li>
        </div>
      </ul>

      {letsTalkVisibility && (
        <dialog ref={letsTalkRef} className={styles.letsTalkModule}>
          <LetsTalk onClose={toggleLetsTalkVisibility} />
          <form method="dialog">
            <button
              className={`circleButton ${styles.letsTalkCloseButton}`}
              onClick={toggleLetsTalkVisibility}
            >
              <p>&times;</p>
            </button>
          </form>
        </dialog>
      )}
    </nav>
  );
};

export default Navbar;
