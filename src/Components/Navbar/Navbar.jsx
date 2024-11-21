import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Hamburger from "../../helperComponents/Hamburger/Hamburger";

const Navbar = () => {
  // This state handles show/hide navLinks on mobile
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleNavBarView() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <nav className={styles.navBar} data-expanded={isExpanded}>
      <a href="/" className={styles.logo}>
        <h1>Biki Balami</h1>
      </a>

      <ul className={styles.navItems}>
        <Hamburger toggleNavBarView={toggleNavBarView} />

        <div className={styles.navLinks}>
          <li>Home</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>My Story</li>
          <li>
            <button className={styles.letsTalk}>Lets Talk</button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
