import { useState } from "react";
import "./Size.css";

function Size() {
  const [sizeOpen, setSizeOpen] = useState(false);

  return (
    <aside className="filter-section">
      <h4
        className={`filter-header ${sizeOpen ? "opened" : "closed"}`}
        onClick={() => setSizeOpen(!sizeOpen)}
      >
        Size
      </h4>
      {sizeOpen && (
        <ul className="list-unstyled dropdown-animation">
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="small" />
            <label htmlFor="small" className="form-check-label">
              Small
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="medium" />
            <label htmlFor="medium" className="form-check-label">
              Medium
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="large" />
            <label htmlFor="large" className="form-check-label">
              Large
            </label>
          </li>
        </ul>
      )}
    </aside>
  );
}

export default Size;
