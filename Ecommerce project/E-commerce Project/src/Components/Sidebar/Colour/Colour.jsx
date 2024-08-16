import { useState } from "react";
import "./Colour.css";

function Colour({ handleChange }) {
  const [colourOpen, setColourOpen] = useState(true);

  return (
    <div className="filter-section">
      <h4
        className={`filter-header ${colourOpen ? "opened" : "closed"}`}
        onClick={() => setColourOpen(!colourOpen)}
      >
        Colour
      </h4>
      {colourOpen && (
        <ul
          onChange={handleChange}
          className="list-unstyled dropdown-animation"
        >
          <li className="form-check">
            <input
              value="black"
              type="checkbox"
              className="form-check-input"
              id="black"
            />
            <label htmlFor="black" className="form-check-label">
              Black <span className="colour black"></span>
            </label>
          </li>
          <li className="form-check">
            <input
              value="red"
              type="checkbox"
              className="form-check-input"
              id="red"
            />
            <label htmlFor="red" className="form-check-label">
              Red <span className="colour red"></span>
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="brown" />
            <label htmlFor="brown" className="form-check-label">
              Brown <span className="colour brown"></span>
            </label>
          </li>
          <li className="form-check">
            <input
              value=""
              type="checkbox"
              className="form-check-input"
              id="multicolour"
            />
            <label htmlFor="multicolour" className="form-check-label">
              Multicolour <span className="colour multicolour"></span>
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="grey" />
            <label htmlFor="grey" className="form-check-label">
              Grey <span className="colour grey"></span>
            </label>
          </li>
          <li className="form-check">
            <input type="checkbox" className="form-check-input" id="blue" />
            <label htmlFor="blue" className="form-check-label">
              Blue <span className="colour blue"></span>
            </label>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Colour;
