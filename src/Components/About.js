import { useState } from "react";
import styles from "../Styles/About.module.css";
import shoe1 from "../Image1/shoe1.png";

const products = [
  { id: 1, name: "Converse", sizes: ["S", "M", "L"], image: shoe1 },
  { id: 2, name: "Jordan-4", sizes: ["S", "M", "L"], image: shoe1 },
  { id: 3, name: "Retro", sizes: ["S", "M", "L"], image: shoe1 },
  { id: 4, name: "Jordan", sizes: ["S", "M", "L"], image: shoe1 },
  { id: 5, name: "Nike Air", sizes: ["S", "M", "L"], image: shoe1 },
  { id: 6, name: "Puma", sizes: ["S", "M", "L"], image: shoe1 },
  { id: 7, name: "Adidas", sizes: ["S", "M", "L"], image: shoe1 },
  { id: 8, name: "Reebok", sizes: ["S", "M", "L"], image: shoe1 },
];

export default function ProductCarousel() {
  const visibleCards = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = products.length - visibleCards;

  const next = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Find your Perfect Wear</h1>

      <div className={styles.carousel}>
        <button
          onClick={prev}
          className={`${styles.arrow} ${
            currentIndex === 0 ? styles.disabled : ""
          }`}
        >
          ‹
        </button>

        <div className={styles.carouselWindow}>
          <div
            className={styles.cards}
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleCards)
              }%)`,
            }}
          >
            {products.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>

                <div className={styles.sizes}>
                  {item.sizes.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className={`${styles.arrow} ${
            currentIndex === maxIndex ? styles.disabled : ""
          }`}
        >
          ›
        </button>
      </div>

      <button className={styles.allBtn}>ALL PRODUCTS</button>
    </div>
  );
}
