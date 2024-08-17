import { useState } from "react";
import "./Price.css";

function Price({ handleChange }) {
  const [priceOpen, setPriceOpen] = useState(false);

  return (
    <aside className="filter-section">
      <h4
        className={`filter-header ${priceOpen ? "opened" : "closed"}`}
        onClick={() => setPriceOpen(!priceOpen)}
      >
        Price
      </h4>
      {priceOpen && (
        <ul
          onChange={handleChange}
          className="list-unstyled dropdown-animation"
        >
          <li className="form-check">
            <input
              value=""
              type="checkbox"
              className="form-check-input"
              id="All"
            />
            <label htmlFor="" className="form-check-label">
              All
            </label>
          </li>
          <li className="form-check">
            <input
              value={50}
              type="checkbox"
              className="form-check-input"
              id="0-50"
            />
            <label htmlFor="0-50" className="form-check-label">
              $0 - $50
            </label>
          </li>
          <li className="form-check">
            <input
              value={100}
              type="checkbox"
              className="form-check-input"
              id="50-100"
            />
            <label htmlFor="50-100" className="form-check-label">
              $50 - $100
            </label>
          </li>
          <li className="form-check">
            <input
              value={150}
              type="checkbox"
              className="form-check-input"
              id="100-150"
            />
            <label htmlFor="100-150" className="form-check-label">
              $100 - $150
            </label>
          </li>
          <li className="form-check">
            <input
              value={200}
              type="checkbox"
              className="form-check-input"
              id="100-200"
            />
            <label htmlFor="100-200" className="form-check-label">
              $100 - $200
            </label>
          </li>
        </ul>
      )}
    </aside>
  );
}

export default Price;
