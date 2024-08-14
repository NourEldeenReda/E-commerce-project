import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";

function App() {
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
