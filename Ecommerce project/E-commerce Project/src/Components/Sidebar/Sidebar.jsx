/* eslint-disable react/prop-types */
import "./Sidebar.css";
import Category from "./Category/Category";
import Type from "./Type/Type";
import Colour from "./Colour/Colour";
import Size from "./Size/Size";
import Price from "./Price/Price";
import { FaTrash } from "react-icons/fa"; // Import the trash icon from react-icons
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css"; // Your custom CSS for additional styling

function Sidebar({ setSelectedCategory }) {
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedCategory((prevSelected) => {
      if (isChecked) {
        // Add the new value to the array of selected categories
        return [...prevSelected, value];
      } else {
        // Remove the unchecked value from the array
        return prevSelected.filter((item) => item !== value);
      }
    });
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          <div className="list-group-item bg-light">
            <Category handleCategoryChange={handleChange} />
          </div>
          <div className="list-group-item bg-light">
            <Type />
          </div>
          <div className="list-group-item bg-light">
            <Colour handleColourChange={handleChange} />
          </div>
          <div className="list-group-item bg-light">
            <Size />
          </div>
          <div className="list-group-item bg-light">
            <Price handlePriceChange={handleChange} />
          </div>
        </div>
        <div className="sidebar-buttons p-3 d-flex justify-content-between">
          <button className="btn btn-primary flex-grow-1 me-2">Apply</button>
          <button className="btn btn-outline-secondary">
            <FaTrash /> {/* Trash icon */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
