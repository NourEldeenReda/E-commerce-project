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
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          <div className="list-group-item bg-light">
            <Category handleChange={handleChange} />
          </div>
          <div className="list-group-item bg-light">
            <Type />
          </div>
          <div className="list-group-item bg-light">
            <Colour handleChange={handleChange} />
          </div>
          <div className="list-group-item bg-light">
            <Size />
          </div>
          <div className="list-group-item bg-light">
            <Price handleChange={handleChange} />
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
