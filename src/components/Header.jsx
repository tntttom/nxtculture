import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.navBar}>
      <h1 className={styles.logo}>NXT</h1>

      <div className={styles.navBarGroup}>
        <div className={styles.navButton}>About Me</div>
        <div className={styles.navButton}>Skills</div>
        <div className={styles.navButton}>Contact Me</div>
      </div>
    </div>
  );
};

export default Header;
