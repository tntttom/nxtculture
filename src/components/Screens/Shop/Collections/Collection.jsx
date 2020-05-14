import React from "react";

import styles from "./Collection.module.css";

const Collection = () => {
  return (
    <div className={styles.collectionContainer}>
      <div className={styles.collectionImgContainer}>
        <h1 className={styles.headerText}>Collection</h1>
        <button className={styles.collectionBtn}>View Lookbook</button>
      </div>
    </div>
  );
};

export default Collection;
