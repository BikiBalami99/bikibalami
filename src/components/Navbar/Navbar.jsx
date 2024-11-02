import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.wish}>Good Evening!</div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>My Story</li>
      </ul>
      <ul className={styles.letsTalk}>
        <li>Lets Talk</li>
      </ul>
    </nav>
  );
};

export default Navbar;
