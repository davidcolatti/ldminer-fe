import React from "react";
import styles from "./navbar.module.scss";
import emblem from "./../../assets/images/app-emblem.png";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <img className={styles.emblem} src={emblem} alt="app-emblem" />
    </div>
  );
};

export default NavBar;
