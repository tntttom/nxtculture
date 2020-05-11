import React from "react";

import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.navBar}>
      <header>
        <h1 className={styles.logo}>NXT</h1>

        <div className={styles.navBarGroup}>
          <Link to="/">
            <div className={styles.navButton}>Lookbook</div>
          </Link>
          <Link to="/shop">
            <div className={styles.navButton}>Shop</div>
          </Link>
          <Link to="/about">
            <div className={styles.navButton}>About Us</div>
          </Link>
          <Link to="/contact">
            <div className={styles.navButton}>Contact</div>
          </Link>
        </div>

        <div className={styles.navIconGroup}>
          {/* <div className={styles.navButton}>Lookbook</div>
          <div className={styles.navButton}>Shop</div> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
