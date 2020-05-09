import React from "react";

import styles from "./Content.module.css";

import { CardGroup } from "../components";

const Header = () => {
  return (
    <div className={styles.body}>
      Content
      <CardGroup />
    </div>
  );
};

export default Header;
