import React from "react";
import styles from "../Styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h3>SAMEER.IN</h3>
      </div>

      <div className={styles.navlinks}>
        <a href="/#home">
          <h3>Home</h3>
        </a>
        <a href="/#about">
          <h3>About</h3>
        </a>
        <a href="/#product">
          <h3>Product</h3>
        </a>
        <a href="/#HeroTestimonials">
          <h3>HeroTestimonials</h3>
        </a>
      </div>

      <div>
        <button className={styles.shopbtn}>SHOP NOW</button>
      </div>
    </div>
  );
}
