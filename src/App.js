// import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import HeroTestimonials from "./Components/Testmonential";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/product" element={<Product />} />
    //     <Route path="/testimonials" element={<HeroTestimonials />} />
    //   </Routes>
    // </BrowserRouter>

    <>
    <Navbar />
    <Home />
    <Product />
    <HeroTestimonials />
    </>
  );
}

export default App;
