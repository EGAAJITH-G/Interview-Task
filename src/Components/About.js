import { useState } from "react";
import styles from "../Styles/About.module.css";
import shoe1 from "../Image1/shoe1.png";

const products = [
  { id: 1, name: "Converse", image: shoe1 },
  { id: 2, name: "Jordan-4", image: shoe1 },
  { id: 3, name: "Retero", image: shoe1 },
  { id: 4, name: "Jordan", image: shoe1 }
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Find your Perfect Wear</h1>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrow} onClick={prev}>‹</button>

        <div className={styles.carousel}>
          {products.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.card} ${
                index === activeIndex ? styles.active : ""
              }`}
            >
              <img src={item.image} alt={item.name} />
              <p className={styles.name}>{item.name}</p>

              <div className={styles.sizes}>
                <span>S</span>
                <span>M</span>
                <span>L</span>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.arrow} onClick={next}>›</button>
      </div>

      <button className={styles.allBtn}>ALL PRODUCTS</button>

      
    </div>
  );
}
