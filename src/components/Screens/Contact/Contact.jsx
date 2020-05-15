import React from "react";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.headerText}>Contact Us</h1>

      <div className={styles.textContainer}>
        <p>If you have any questions, contact us!</p>

        <h3>Email</h3>
        <p>nxtculture@gmail.com</p>

        <h3>Social Media</h3>

        <div className={styles.socialMediaLinks}>
          <a href="www.google.com" className={styles.socialLink}>
            Facebook
          </a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
