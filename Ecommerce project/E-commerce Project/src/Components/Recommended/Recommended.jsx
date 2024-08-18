import Buttons from "../Buttons";
import "./Recommended.css";

function Recommended({ setSelectedCategory }) {
  const handleClick = (event) => {
    const value = event.target.value;
    if (value === "") {
      setSelectedCategory([]); // Reset to an empty array for "All Products"
    } else {
      setSelectedCategory([value]); // Set the selected category in an array
    }
  };

  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
}

export default Recommended;
