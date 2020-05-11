import React from "react";

import styles from "./Footer.module.css";

const Footer = (props) => {
  const { imageSource } = props;
  return (
    <div className={styles.footer}>
      <div className={styles.footer_lookbook}>
        <h3 className={styles.footerText}>Lookbook</h3>
        <h6>F/W 2020</h6>
        <h6>S/S 2021</h6>
        <h6>F/W 2021</h6>
      </div>
      <div className={styles.footer_nxt}>
        <h3 className={styles.footerText}>NXT</h3>
        <h6>F/W 2020</h6>
        <h6>S/S 2021</h6>
        <h6>F/W 2021</h6>
      </div>
    </div>
  );
};

export default Footer;
