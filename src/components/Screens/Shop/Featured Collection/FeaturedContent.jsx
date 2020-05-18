import React from "react";

import styles from "./FeaturedContent.module.css";

import { motion } from "framer";
import { Link } from "react-router-dom";

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

        <Link to="/shop/list">
          <motion.button className={styles.featureBtn}>
            Shop Collection
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedContent;
