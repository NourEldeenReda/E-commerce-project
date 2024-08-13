import { useState } from "react";
import "./Colour.css";

function Colour() {
  const [colourOpen, setColourOpen] = useState(true);

  return (
    <>
      {" "}
      <h4 onClick={() => setColourOpen(!colourOpen)}>
        Colour {colourOpen ? "▲" : "▼"}
      </h4>
      {colourOpen && (
        <ul>
          <li>
            <input type="checkbox" /> Black{" "}
            <span className="colour black"></span>
          </li>
          <li>
            <input type="checkbox" /> Red <span className="colour red"></span>
          </li>
          <li>
            <input type="checkbox" /> Brown{" "}
            <span className="colour brown"></span>
          </li>
          <li>
            <input type="checkbox" checked /> Multicolour{" "}
            <span className="colour multicolour"></span>
          </li>
          <li>
            <input type="checkbox" /> Grey <span className="colour grey"></span>
          </li>
          <li>
            <input type="checkbox" /> Blue <span className="colour blue"></span>
          </li>
        </ul>
      )}
    </>
  );
}

export default Colour;
