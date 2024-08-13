import { useState } from "react";

function Type() {
  const [typeOpen, setTypeOpen] = useState(true);

  return (
    <>
      <h4 onClick={() => setTypeOpen(!typeOpen)}>
        Type {typeOpen ? "▲" : "▼"}
      </h4>
      {typeOpen && (
        <ul>
          <li>
            <input type="checkbox" /> Basic
          </li>
          <li>
            <input type="checkbox" /> Pattern
          </li>
          <li>
            <input type="checkbox" /> Hoodie
          </li>
          <li>
            <input type="checkbox" /> Zipper
          </li>
          <li>
            <input type="checkbox" checked /> Oversize
          </li>
        </ul>
      )}
    </>
  );
}

export default Type;
