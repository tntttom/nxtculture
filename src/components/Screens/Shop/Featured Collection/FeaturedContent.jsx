import React from "react";

import styles from "./FeaturedContent.module.css";

import { motion } from "framer";

const FeaturedContent = () => {
  return (
    <motion.div
      className={styles.featuredContent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.imgComponents}>
        <h1 className={styles.headerText}> Featured Collection</h1>

        <motion.button className={styles.featureBtn}>
          Shop Collection
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FeaturedContent;
