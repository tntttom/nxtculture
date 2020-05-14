import React from "react";

import styles from "./FeaturedContent.module.css";

const FeaturedContent = () => {
  return (
    <div className={styles.featuredContent}>
      <div className={styles.imgComponents}>
        <h1 className={styles.headerText}> Featured Collection</h1>

        <button className={styles.featureBtn} title="Shop Collection">
          Shop Collection
        </button>
      </div>
    </div>
  );
};

export default FeaturedContent;
