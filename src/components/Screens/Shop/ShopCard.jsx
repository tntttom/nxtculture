import React from "react";

import styles from "./ShopCard.module.css";

const ShopCard = () => {
  return (
    <div className={styles.cardContainer}>
      <img
        src="https://cdn.shopify.com/s/files/1/0094/2252/products/MACTB8601-BLK_140_1296x.jpg?v=1589380754"
        alt="picture of clothes"
      />

      <div className={styles.cardContent}>
        <h2 className={styles.productTitle}>Black Hoodie</h2>
        <h3 className={styles.collectionTitle}>Basics Collection</h3>
        <h5 className={styles.price}>$50.00</h5>
      </div>
    </div>
  );
};

export default ShopCard;
