import React from "react";

import styles from "./Footer.module.css";

import { TextInput } from "../../components";

const Footer = (props) => {
  const { imageSource } = props;
  return (
    <div className={styles.footer}>
      <div className={styles.footer_lookbook}>
        <h3 className={styles.footerText}>LOOKBOOK</h3>
        <h6>F/W 2020</h6>
        <h6>S/S 2021</h6>
        <h6>F/W 2021</h6>
      </div>
      <div className={styles.footer_nxt}>
        <h3 className={styles.footerText}>NXT</h3>
        <h6>WHO WE ARE</h6>
        <h6>CONTACT US</h6>
      </div>
      <div className={styles.footer_findus}>
        <h3 className={styles.footerText}>FIND US</h3>
        <h6>INSTAGRAM</h6>
        <h6>TWITTER</h6>
        <h6>FACEBOOK</h6>
      </div>

      <div className={styles.footer_form}>
        <form className={styles.footerform}>
          <h3>Join our newsletter:</h3>

          <input className={styles.inputField} type="text" value="" />
          <input className={styles.submitBtn} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
