import PropTypes from "prop-types";
import Buttons from "../Buttons";
import "./Recommended.css";

function Recommended({ setSelectedCategory }) {
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
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
Recommended.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Recommended;
