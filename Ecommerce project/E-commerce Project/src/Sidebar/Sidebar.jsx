import "./Sidebar.css";
import Category from "./Category/Category";
import Type from "./Type/Type";
import Colour from "./Colour/Colour";
import Size from "./Size/Size";
import Price from "./Price/Price";
import { FaTrash } from "react-icons/fa"; // Import the trash icon from react-icons

import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css"; // Your custom CSS for additional styling

const Sidebar = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            <Category />
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            <Type />
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            <Colour />
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            <Size />
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            <Price />
          </a>
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
};

export default Sidebar;
