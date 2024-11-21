import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { generateWish } from "../../utils/generateWish";
import Hamburger from "../../helperComponents/Hamburger/Hamburger";

const Navbar = () => {
  const [wishMessage, setWishMessage] = useState("");

  useEffect(() => {
    const timeRightNow = new Date().getHours();
    setWishMessage(() => generateWish(timeRightNow));
  }, []);

  return (
    <nav className={styles.navBar}>
      <div className={styles.wish}>
        <p>{wishMessage}</p>
      </div>
      <ul className={styles.navLinks}>
        <Hamburger />
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>My Story</li>
        <li>
          <button className={styles.letsTalk}>Lets Talk</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
