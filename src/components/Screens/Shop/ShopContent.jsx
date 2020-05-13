import React from "react";

import styles from "./ShopContent.module.css";

import { ShopCard } from "../../../components";

const ShopContent = () => {
  return (
    <div>
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </div>
  );
};

export default ShopContent;
