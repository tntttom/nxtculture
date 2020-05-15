import React from "react";

import styles from "./Home.module.css";

import { Content } from "../../../components";

const Home = () => {
  return (
    <div className={styles.Content}>
      <h1 className={styles.textColor}>SPRING 2020</h1>
      <Content />
    </div>
  );
};

export default Home;
