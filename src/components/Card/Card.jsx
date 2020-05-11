import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  const { imageSource } = props;
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={imageSource} />
    </div>
  );
};

export default Card;
