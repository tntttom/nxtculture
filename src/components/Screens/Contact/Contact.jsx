import React from "react";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.headerText}>Contact Us</h1>

      <p>If you have any questions, contact us!</p>

      <h3>Email</h3>
      <p>nxtculture@gmail.com</p>

      <h3>Social Media</h3>
      <a href="www.google.com">Facebook</a>
      <a href="">Twitter</a>
      <a href="">Instagram</a>
    </div>
  );
};

export default Contact;
