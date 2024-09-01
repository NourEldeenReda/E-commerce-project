import "./Sidebar.css";
import Category from "./Category/Category";
import Colour from "./Colour/Colour";
import Size from "./Size/Size";
import Price from "./Price/Price";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteringResult,
  applyFilters,
  resetFilters,
} from "../../Store/filteringSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const pendingSelectedCategories = useSelector(
    (state) => state.filtering.pendingSelectedCategory
  );

  const handlePendingChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    dispatch(
      setFilteringResult(
        isChecked
          ? [...pendingSelectedCategories, value]
          : pendingSelectedCategories.filter((item) => item !== value)
      )
    );
  };

  const handleApply = () => {
    dispatch(applyFilters());
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="d-flex">
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          <div className="list-group-item bg-light">
            <Category />
          </div>
          <div className="list-group-item bg-light">
            <Colour handleColourChange={handlePendingChange} />
          </div>
          <div className="list-group-item bg-light">
            <Size />
          </div>
          <div className="list-group-item bg-light">
            <Price handlePriceChange={handlePendingChange} />
          </div>
        </div>
        <div className="sidebar-buttons p-3 d-flex justify-content-between">
          <button
            className="btn btn-primary flex-grow-1 me-2"
            onClick={handleApply}
          >
            Apply
          </button>
          <button className="btn btn-outline-secondary" onClick={handleReset}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
