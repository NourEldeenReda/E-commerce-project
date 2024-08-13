import Category from "./Category/Category";
import Price from "./Price/Price";
import Colour from "./Colour/Colour";
import "./Sidebar.css";
function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category />
        <Price />
        <Colour />
      </section>
    </>
  );
}

export default Sidebar;
