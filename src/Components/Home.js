import React from "react";
import styles from "../Styles/Home.module.css";

import dottop from "../Images/homeimg/Group 12.png";
import dotside from "../Images/homeimg/Group 11.png";
import shoe from "../Images/homeimg/shoe.png";
import shoe2 from "../Images/homeimg/shoe.png";
import shoe3 from "../Images/homeimg/shoe.png";


export default function Home() {
  const shoes = [shoe, shoe2, shoe3];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % shoes.length);
  }
  return (
    <div className={styles.home_container}>
      <img src={dottop} alt="top dots" className={styles.dot_top} />
      <img src={dotside} alt="left dots" className={styles.dot_left} />
      <img src={dotside} alt="right dots" className={styles.dot_right} />

      <div className={styles.home_content}>
        <div className={styles.text_section}>
          <p className={styles.vintage}>Vintage Collection</p>

          <h1 className={styles.sneakers}>SNEAKERS</h1>
          <h1 className={styles.sale}>SALE</h1>

          <p className={styles.subtitle}>Half the price, twice the style.</p>
          <div className={styles.btn_wrapper}>
            <button className={styles.btn}>SHOP NOW</button>
          </div>
        </div>

        <div className={styles.image_section}>
          <div className={styles.circle}></div>
            <img
            key={currentIndex}
            src={shoes[currentIndex]}
            alt="shoe"
            className={styles.shoe_img}
          />
        </div>
      </div>

      <button className={styles.next_btn} onClick={nextSlide}>❯</button>

      <div className={styles.slider_controls}>
        <div className={styles.pagination}>
          {shoes.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                currentIndex === i ? styles.active : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
