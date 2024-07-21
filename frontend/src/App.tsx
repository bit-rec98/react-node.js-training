import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { getAllProducts } from "./services/http-products";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <BrowserRouter>
      <Header></Header>
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
