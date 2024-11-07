import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  function toggleShowLinks() {
    setShowLinks((prev) => !prev);
  }

  return (
    <nav
      className={styles.navBar}
      style={showLinks ? { height: "4rem" } : null}
    >
      <div
        className={styles.wish}
        style={
          showLinks ? { opacity: "0", transform: "translateY(-50px)" } : null
        }
      >
        <p>Good Evening!</p>
      </div>
      <div className={styles.navItems}>
        <div onClick={toggleShowLinks} className={styles.hamburger}>
          <div className={styles.top}></div>
          <div className={styles.middle}></div>
          <div className={styles.bottom}></div>
        </div>
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
