import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [hideLinks, setHideLinks] = useState(true);

  function togglehideLinks() {
    setHideLinks((prev) => !prev);
  }

  return (
    <nav
      className={styles.navBar}
      style={hideLinks ? { height: "70px" } : null}
    >
      <div className={styles.wish}>
        <p>Good Evening!</p>
      </div>
      <div className={styles.navItems}>
        {/* Hamburger Icon */}
        <div onClick={togglehideLinks} className={styles.hamburger}>
          <div
            className={
              hideLinks ? styles.top : `${styles.top} ${styles.topAnimation}`
            }
          ></div>
          <div
            className={
              hideLinks
                ? styles.middle
                : `${styles.middle} ${styles.middleAnimation}`
            }
          ></div>
          <div
            className={
              hideLinks
                ? styles.bottom
                : `${styles.bottom} ${styles.bottomAnimation}`
            }
          ></div>
        </div>

        {/* NavLinks */}
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>My Story</li>
        </ul>
        <ul>
          <li>
            <button className={styles.letsTalk}>Lets Talk</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
