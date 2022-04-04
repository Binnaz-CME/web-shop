import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdminUsers from "./pages/AdminUsers";
import AdminUserCarts from "./pages/AdminUserCarts";
import useCart from "./hooks/useCart";
import useFetch from "./hooks/useFetch";

function App() {
  const { loadSavedCart } = useCart();

  const { loading, error } = useFetch(
    "https://k4backend.osuka.dev/products"
  );

  useEffect(() => {
    loadSavedCart();
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products loading={loading} error={error} />}
        />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/usercarts" element={<AdminUserCarts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
