import React, { useState, useEffect } from "react";

import styles from "./Shop.module.css";

import { ShopContent, ShopList } from "../../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { json } from "body-parser";

const Shop = () => {
  // axios.get("http://localhost:5000/shop").then((res) => {
  //   console.log(res.data.collections);
  // });

  const [retrievedCollections, setRetrievedCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get("http://localhost:5000/collections");

      let data = result.data;

      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ShopContent />
    </div>
  );
};

export default Shop;
