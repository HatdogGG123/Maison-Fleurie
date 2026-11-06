import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import FlowerShop from "./pages/FlowerShop";
import Contact from "./pages/Contact";
import BookEvent from "./pages/BookEvent";
import ProductCheckout from "./pages/ProductCheckout";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/flowers" element={<FlowerShop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/bookEvent" element={<BookEvent />}></Route>
        <Route path="/ProductCheckout" element={<ProductCheckout />}></Route>
        <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
