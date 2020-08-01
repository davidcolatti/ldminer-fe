import React from "react";
import styles from "./navbar.module.scss";
import emblem from "./../../assets/images/app-emblem.png";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <span>
        <img className={styles.emblem} src={emblem} alt="app-emblem" />
      </span>
    </div>
  );
};

export default NavBar;
