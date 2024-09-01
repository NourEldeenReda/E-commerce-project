import { useDispatch } from "react-redux";
import Buttons from "../Buttons";
import "./Recommended.css";
import {
  setRecommendedBrand,
  fetchFilteredProducts,
} from "../../Store/filteringSlice"; // Import fetchFilteredProducts

function Recommended() {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const value = event.target.value;
    if (value === "") {
      dispatch(setRecommendedBrand([])); // Reset to an empty array for "All Products"
    } else {
      dispatch(setRecommendedBrand([value])); // Set the selected brand in an array
    }

    dispatch(fetchFilteredProducts()); // Fetch filtered data whenever a recommended brand is selected
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
