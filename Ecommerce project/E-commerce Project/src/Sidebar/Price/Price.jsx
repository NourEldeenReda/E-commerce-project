import { useState } from "react";
import "./Price.css";
function Price() {
  const [priceOpen, setPriceOpen] = useState(false);
  return (
    <>
      {" "}
      <h4 onClick={() => setPriceOpen(!priceOpen)}>
        Price {priceOpen ? "▲" : "▼"}
      </h4>
      {priceOpen && (
        <ul>
          <li>
            <input type="checkbox" /> $0 - $50
          </li>
          <li>
            <input type="checkbox" /> $50 - $100
          </li>
          <li>
            <input type="checkbox" /> $100 - $200
          </li>
        </ul>
      )}
    </>
  );
}

export default Price;
