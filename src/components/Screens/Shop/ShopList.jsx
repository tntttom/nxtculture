import React from "react";

import { ShopCard } from "../../../components";

import styles from "./ShopList.module.css";

const ShopList = () => {
  return (
    <div className={styles.shopListContainer}>
      <p>Shop List</p>

      <div className={styles.shopCardContainer}>
        <ShopCard />
      </div>
    </div>
  );
};

export default ShopList;
