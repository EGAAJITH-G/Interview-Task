
import React from "react";
import styles from "../Styles/Testmonials.module.css";
import img from '../images 2/shoes6.png';



export default function HeroTestimonials() {
  
  return (
    <div className={styles.page}>
      

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Good Shoes takes you Good Places</h1>
          <p className={styles.desc}>
            Step into good shoes, and you'll embark on a journey to incredible destinations.<br />
            Your choice of footwear isn't just about comfort;<br />
            it's a passport to adventure. So, lace up your dreams and stride towards a world<br />
            of endless possibilities, one stylish step at a time.
          </p>
        <button className={styles.button}>SHOP NOW</button>
        </div>

        <img
          src={img}
          alt="shoe"
          className={styles.heroImage}
        />
      </section>

      <h2 className={styles.testTitle}>Testimonials</h2>

      <section className={styles.cards}>
        <div className={`${styles.card} ${styles.dark}`}>
          <div className={styles.quote}>“</div>
          <p className={styles.cardText}>
            I adore my 'ComfortWalk' sneakers! They're stylish and incredibly comfy.
            Your e-commerce site made shopping a breeze. I'll be a loyal customer!
          </p>
          <div className={styles.user}>Sarah Johnson</div>
        </div>

        <div className={styles.card}>
          <div className={styles.quote}>“</div>
          <p className={styles.cardText}>
            Found my perfect 'Durashield' work boots here. Sturdy and dependable.
            Your website rocks! Great service!
          </p>
          <div className={styles.user}>David Rodriguez</div>
        </div>

        <div className={styles.card}>
          <div className={styles.quote}>“</div>
          <p className={styles.cardText}>
            GlamourHeels wowed at my event! Comfy and elegant.
            Your site's a gem. Recommending it to all!
          </p>
          <div className={styles.user}>Emily Turner</div>
        </div>
      </section>
    </div>
  );
}


