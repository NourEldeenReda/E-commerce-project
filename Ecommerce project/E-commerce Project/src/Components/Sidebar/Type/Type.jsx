import { useState } from "react";
import "./Type.css"; // Assuming you'll add the CSS specific to this component here

function Type() {
  const [typeOpen, setTypeOpen] = useState(true);

  return (
    <div className="filter-section">
      <h4
        className={`filter-header ${typeOpen ? "opened" : "closed"}`}
        onClick={() => setTypeOpen(!typeOpen)}
      >
        Type
      </h4>
      {typeOpen && (
        <ul className="list-unstyled dropdown-animation">
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="basic" />
            <label htmlFor="basic" className="form-check-label">
              Basic
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="pattern" />
            <label htmlFor="pattern" className="form-check-label">
              Pattern
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="hoodie" />
            <label htmlFor="hoodie" className="form-check-label">
              Hoodie
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="zipper" />
            <label htmlFor="zipper" className="form-check-label">
              Zipper
            </label>
          </li>
          <li className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="oversize"
              defaultChecked
            />
            <label htmlFor="oversize" className="form-check-label">
              Oversize
            </label>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Type;
