import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Recommended />
          <Products />
        </div>
      </div>
    </>
  );
}

export default App;
