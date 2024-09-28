import Navigation from "./Components/Navigation/Nav";
import Products from "./Components/Products/Products";
import Recommended from "./Components/Recommended/Recommended";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./Store/filteringSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import Cart from "./Components/Carts/Cart.jsx";
import Wishlist from "./Components/Wishlists/Wishlist.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />

        <Route
          path="/"
          element={
            <>
              <Navigation />
              <div className="app-container d-flex">
                <Sidebar />
                <div className="main-content flex-grow-1">
                  <Recommended />
                  <Products />
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
