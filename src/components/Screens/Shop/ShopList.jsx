import React from "react";

import { ShopCard } from "../../../components";

import { motion } from "framer";

import styles from "./ShopList.module.css";

const ShopList = () => {
  return (
    <motion.div
      className={styles.shopListContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Blaack Collection</h1>

      <div className={styles.shopCardContainer}>
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </motion.div>
  );
};

export default ShopList;
