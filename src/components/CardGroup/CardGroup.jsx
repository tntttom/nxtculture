import React from "react";

import styles from "./CardGroup.module.css";

import imageList from "../../Constants";

import { Card } from "..";

const CardGroup = () => {
  const getImageCards = (imageObj) => {
    const { imageSource, id } = imageObj;

    return <Card {...imageObj} key={id} />;
  };

  return (
    <div className={styles.group}>
      {imageList.map((imageObj) => getImageCards(imageObj))}
    </div>
  );
};

export default CardGroup;
