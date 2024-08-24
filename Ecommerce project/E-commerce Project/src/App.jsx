import Navigation from "./Components//Navigation/Nav";
import Products from "./Components//Products/Products";
import Recommended from "./Components//Recommended/Recommended";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./Store/filteringSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
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
  );
}

export default App;
