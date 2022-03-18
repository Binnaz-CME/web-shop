import { Routes, Route } from "react-router-dom";
import "./App.css";

import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import useCart from "./hooks/useCart";

import Nav from "./components/Nav";

function App() {
  const { loadSavedCart } = useCart();

  useEffect(() => {
    loadSavedCart();
  }, [])

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
