import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register"
import NotFound from "./pages/NotFound";
// import MyPage from "./pages/MyPage";
import Nav from "./components/Nav";
import Footer from './components/Footer'

import useCart from "./hooks/useCart";

function App() {
  const { loadSavedCart } = useCart();

  useEffect(() => {
    loadSavedCart();
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login/:user" element={<MyPage />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
