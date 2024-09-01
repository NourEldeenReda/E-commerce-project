import { useState } from "react";
import "./Price.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setPriceSelection,
  fetchFilteredProducts,
} from "../../../Store/filteringSlice"; // Import necessary actions

function Price() {
  const [priceOpen, setPriceOpen] = useState(false);
  const dispatch = useDispatch();
  const selectedPrices = useSelector((state) => state.filtering.selectedPrice); // Ensure we use the correct state

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    const updatedPrices = isChecked
      ? [...selectedPrices, value]
      : selectedPrices.filter((item) => item !== value);

    dispatch(setPriceSelection(updatedPrices)); // Pass the new array directly

    console.log("Selected prices:", updatedPrices); // Debugging line

    dispatch(fetchFilteredProducts());
  };
  return (
    <aside className="filter-section">
      <h4
        className={`filter-header ${priceOpen ? "opened" : "closed"}`}
        onClick={() => setPriceOpen(!priceOpen)}
      >
        Price
      </h4>
      {priceOpen && (
        <ul className="list-unstyled dropdown-animation">
          <li className="form-check">
            <input
              value=""
              type="checkbox"
              className="form-check-input"
              id="All"
              onChange={handleCheckboxChange}
              checked={selectedPrices.includes("")} // Reflect Redux state
            />
            <label htmlFor="" className="form-check-label">
              All
            </label>
          </li>
          <li className="form-check">
            <input
              value="50"
              type="checkbox"
              className="form-check-input"
              id="50"
              onChange={handleCheckboxChange}
              checked={selectedPrices.includes("50")} // Reflect Redux state
            />
            <label htmlFor="50" className="form-check-label">
              $0 - $50
            </label>
          </li>
          <li className="form-check">
            <input
              value="100"
              type="checkbox"
              className="form-check-input"
              id="100"
              onChange={handleCheckboxChange}
              checked={selectedPrices.includes("100")} // Reflect Redux state
            />
            <label htmlFor="100" className="form-check-label">
              $50 - $100
            </label>
          </li>
          <li className="form-check">
            <input
              value="150"
              type="checkbox"
              className="form-check-input"
              id="150"
              onChange={handleCheckboxChange}
              checked={selectedPrices.includes("150")} // Reflect Redux state
            />
            <label htmlFor="150" className="form-check-label">
              $100 - $150
            </label>
          </li>
          <li className="form-check">
            <input
              value="200"
              type="checkbox"
              className="form-check-input"
              id="200"
              onChange={handleCheckboxChange}
              checked={selectedPrices.includes("200")} // Reflect Redux state
            />
            <label htmlFor="200" className="form-check-label">
              $150 - $200
            </label>
          </li>
        </ul>
      )}
    </aside>
  );
}

export default Price;
