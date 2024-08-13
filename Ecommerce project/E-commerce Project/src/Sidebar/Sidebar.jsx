import "./Sidebar.css";
import Category from "./Category/Category";
import Type from "./Type/Type";
import Colour from "./Colour/Colour";
import Size from "./Size/Size";
import Price from "./Price/Price";

function Sidebar() {
  return (
    <div className="sidebar">
      <Category />
      <div className="filter-section">
        <h3>Filter by :</h3>

        <div className="filter-item">
          <Type />
        </div>

        <div className="filter-item">
          <Colour />
        </div>

        <div className="filter-item">
          <Size />
        </div>

        <div className="filter-item">
          <Price />
        </div>

        <button className="apply-button">Apply</button>
      </div>
    </div>
  );
}

export default Sidebar;
