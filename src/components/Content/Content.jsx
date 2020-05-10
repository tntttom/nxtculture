import React from "react";

import styles from "./Content.module.css";

import { CardGroup } from "..";

const Header = () => {
  return (
    <div className={styles.body}>
      Content
      {/* <CardGroup /> */}
      <p>Who we are</p>
    </div>
  );
};

export default Header;
