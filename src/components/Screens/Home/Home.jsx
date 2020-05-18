import React from "react";

import styles from "./Home.module.css";

import { Content } from "../../../components";

import { motion } from "framer";

const Home = () => {
  return (
    <motion.div
      className={styles.Content}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.textColor}>SPRING 2020</h1>
      <Content />
    </motion.div>
  );
};

export default Home;
