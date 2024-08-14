import { useState } from "react";
import "./Price.css";

function Price() {
  const [priceOpen, setPriceOpen] = useState(false);

  return (
    <div className="filter-section">
      <h4
        className={`filter-header ${priceOpen ? "opened" : "closed"}`}
        onClick={() => setPriceOpen(!priceOpen)}
      >
        Price
      </h4>
      {priceOpen && (
        <ul className="list-unstyled dropdown-animation">
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="0-50" />
            <label htmlFor="0-50" className="form-check-label">
              $0 - $50
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="50-100" />
            <label htmlFor="50-100" className="form-check-label">
              $50 - $100
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="100-200" />
            <label htmlFor="100-200" className="form-check-label">
              $100 - $200
            </label>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Price;
