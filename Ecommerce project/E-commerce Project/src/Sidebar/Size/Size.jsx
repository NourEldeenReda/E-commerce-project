import { useState } from "react";

function Size() {
  const [sizeOpen, setSizeOpen] = useState(false);
  return (
    <>
      {" "}
      <h4 onClick={() => setSizeOpen(!sizeOpen)}>
        Size {sizeOpen ? "▲" : "▼"}
      </h4>
      {sizeOpen && (
        <ul>
          <li>
            <input type="checkbox" /> Small
          </li>
          <li>
            <input type="checkbox" /> Medium
          </li>
          <li>
            <input type="checkbox" /> Large
          </li>
        </ul>
      )}
    </>
  );
}

export default Size;
