import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import HeroTestimonials from "./Components/Testmonential";


function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="product">
        <Product />
      </section>

      <section id="HeroTestimonials">
        <HeroTestimonials />
      </section>
    </>
  );
}

export default App;
