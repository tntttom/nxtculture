import React from "react";

import styles from "./CardGroup.module.css";

import { Card } from "../components";

const CardGroup = () => {
  return (
    <div className={styles.group}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardGroup;
