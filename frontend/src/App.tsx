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
import NotFound from "./pages/NotFound";



function App() {

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
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
