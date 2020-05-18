import React from "react";

import styles from "./Shop.module.css";

import { ShopContent, ShopList } from "../../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <ShopContent />
    </div>
  );
};

export default Shop;
