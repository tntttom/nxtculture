import React from "react";

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Us</h1>

      <div className={styles.aboutContent}>
        <div className={styles.aboutLogo}>LOGO</div>
        <p className={styles.description}>
          We are just two people who want to put out some cool stuff
        </p>
      </div>
    </div>
  );
};

export default About;
