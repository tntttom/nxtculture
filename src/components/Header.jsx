import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.navBar}>
      <header>
        <h1 className={styles.logo}>NXT</h1>

        <div className={styles.navBarGroup}>
          <div className={styles.navButton}>Lookbook</div>
          <div className={styles.navButton}>Shop</div>
          <div className={styles.navButton}>About Us</div>
          <div className={styles.navButton}>Contact</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
