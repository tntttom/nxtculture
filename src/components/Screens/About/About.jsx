import React from "react";

import styles from "./About.module.css";

import { motion } from "framer";

const About = () => {
  return (
    <motion.div
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>About Us</h1>

      <div className={styles.aboutContent}>
        <div className={styles.aboutLogo}>LOGO</div>
        <p className={styles.description}>
          We are just two people who want to put out some cool stuff. We're
          located in the suburbs of Chicago.
        </p>
        <p className={styles.description}>
          <strong>Tommy</strong> - Graduated from Loyola University Chicago with
          a BS in Software Engineering
        </p>
        <p className={styles.description}>
          <strong>Nikki</strong> - Attending Marquete University with a BA in
          Marketing
        </p>
      </div>
    </motion.div>
  );
};

export default About;
