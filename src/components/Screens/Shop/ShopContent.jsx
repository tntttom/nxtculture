import React from "react";

import styles from "./ShopContent.module.css";

import {
  ShopCard,
  FeaturedContent,
  CollectionGroup,
} from "../../../components";

const ShopContent = () => {
  return (
    <div>
      <FeaturedContent />
      <CollectionGroup />
    </div>
  );
};

export default ShopContent;
