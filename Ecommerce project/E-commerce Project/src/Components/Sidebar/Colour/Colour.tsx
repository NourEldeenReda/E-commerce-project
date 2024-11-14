import { useState } from "react";
import "./Colour.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setColorSelection,
  fetchFilteredProducts,
} from "../../../Store/filteringSlice"; // Import necessary actions

function Colour() {
  const [colourOpen, setColourOpen] = useState(true);
  const dispatch = useDispatch();
  const selectedColors = useSelector((state) => state.filtering.selectedColor); // Ensure we use the correct state

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    const updatedColors = isChecked
      ? [...selectedColors, value]
      : selectedColors.filter((item) => item !== value);

    dispatch(setColorSelection(updatedColors)); // Pass the new array directly

    console.log("Selected colors:", updatedColors); // Debugging line

    dispatch(fetchFilteredProducts());
  };

  return (
    <aside className="filter-section">
      <h4
        className={`filter-header ${colourOpen ? "opened" : "closed"}`}
        onClick={() => setColourOpen(!colourOpen)}
      >
        Colour
      </h4>
      {colourOpen && (
        <ul className="list-unstyled dropdown-animation">
          <li className="form-check">
            <input
              value="black"
              type="checkbox"
              className="form-check-input"
              id="black"
              onChange={handleCheckboxChange}
              checked={selectedColors.includes("black")} // Reflect Redux state
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
              onChange={handleCheckboxChange}
              checked={selectedColors.includes("red")} // Reflect Redux state
            />
            <label htmlFor="red" className="form-check-label">
              Red <span className="colour red"></span>
            </label>
          </li>
          <li className="form-check">
            <input
              value="brown"
              type="checkbox"
              className="form-check-input"
              id="brown"
              onChange={handleCheckboxChange}
              checked={selectedColors.includes("brown")} // Reflect Redux state
            />
            <label htmlFor="brown" className="form-check-label">
              Brown <span className="colour brown"></span>
            </label>
          </li>
          <li className="form-check">
            <input
              value="multicolour"
              type="checkbox"
              className="form-check-input"
              id="multicolour"
              onChange={handleCheckboxChange}
              checked={selectedColors.includes("multicolour")} // Reflect Redux state
            />
            <label htmlFor="multicolour" className="form-check-label">
              Multicolour <span className="colour multicolour"></span>
            </label>
          </li>
          <li className="form-check">
            <input
              value="grey"
              type="checkbox"
              className="form-check-input"
              id="grey"
              onChange={handleCheckboxChange}
              checked={selectedColors.includes("grey")} // Reflect Redux state
            />
            <label htmlFor="grey" className="form-check-label">
              Grey <span className="colour grey"></span>
            </label>
          </li>
          <li className="form-check">
            <input
              value="blue"
              type="checkbox"
              className="form-check-input"
              id="blue"
              onChange={handleCheckboxChange}
              checked={selectedColors.includes("blue")} // Reflect Redux state
            />
            <label htmlFor="blue" className="form-check-label">
              Blue <span className="colour blue"></span>
            </label>
          </li>
          <li className="form-check">
            <input
              value="green"
              type="checkbox"
              className="form-check-input"
              id="green"
              onChange={handleCheckboxChange}
              checked={selectedColors.includes("green")} // Reflect Redux state
            />
            <label htmlFor="green" className="form-check-label">
              Green <span className="colour green"></span>
            </label>
          </li>
          <li className="form-check">
            <input
              value="white"
              type="checkbox"
              className="form-check-input"
              id="white"
              onChange={handleCheckboxChange}
              checked={selectedColors.includes("white")} // Reflect Redux state
            />
            <label htmlFor="white" className="form-check-label">
              White <span className="colour white"></span>
            </label>
          </li>
        </ul>
      )}
    </aside>
  );
}

export default Colour;
