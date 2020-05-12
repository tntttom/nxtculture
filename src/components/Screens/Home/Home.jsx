import React from "react";

import styles from "./Home.module.css";

import { Content } from "../../../components";

const Home = () => {
  return (
    <div className={styles.Content}>
      <p className={styles.textColor}>F/W 2020</p>
      <Content />
    </div>
  );
};

export default Home;
