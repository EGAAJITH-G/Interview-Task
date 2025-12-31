import React from "react";
import styles from "../Styles/Product.module.css";
import img1 from '../images 2/shoes.png';
import img2 from '../images 2/shoes2.png';
import img3 from '../images 2/shoes3.png';
import img4 from '../images 2/shoes4.png';
import img5 from '../images 2/shoes5.png';
import img6 from '../images 2/shoes6.png';
import img7 from '../images 2/shoes7.png';
import img8 from '../images 2/shoes8.png';

export default function Product() {
    
  const products = [
    {
      name: "Nike Air Force 1 '07",
      price: "₹ 7,495.00",
      img: img1,
    },
    {
      name: "Nike Air Max SYSTM",
      price: "₹ 8,595.00",
      img: img2,   
     },
    {
      name: "Nike Waffle Debut",
      price: "₹ 5,695.00",
     img: img3,
    },
    {
      name: "Nike Air Force 1 '07",
      price: "₹ 9,695.00",
     img: img4,
    },
    {
      name: "Nike P-6000",
      price: "₹ 7,995.00",
      img: img5,
    },
    {
      name: "Nike E-Series 1.0",
      price: "₹ 8,595.00",
      img: img6,
    },
    {
      name: "Tatum 1 'Home Team' PF",
      price: "₹ 15,695.00",
      img: img7,
    },
    {
      name: "KD16 EP",
      price: "₹ 19,695.00",
      img: img8,
    }
  ];

  return (
    <div className={styles.page}>
    
      <div className={styles.header}>
        <h1 className={styles.title}>ALL PRODUCTS</h1>

        <div className={styles.filters}>
          <span>GENDER ▾</span>
          <span>PRICE ▾</span>
          <span>CATEGORY ▾</span>
          <span>COLLECTION ▾</span>
          <span>MORE+</span>
        </div>
      </div>

    
      <div className={styles.grid}>
        {products.map((p, i) => (
          <div key={i} className={styles.card}>
            <img src={p.img} alt={p.name} className={styles.image} />
            <p className={styles.name}>{p.name}</p>
            <p className={styles.sub}>Men's Shoes</p>
            <p className={styles.price}>MRP : {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

