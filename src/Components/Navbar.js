import React from "react";
import styles from "../Styles/Navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h3>SAMEER.IN</h3>
        </div>

        <div className={styles.navlinks}>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Product</h3>
          <h3>Testimonials</h3>
        </div>

        <div>
          <button className={styles.shopbtn}>SHOP NOW</button>
        </div>
      </div>
    </>
  );
}
