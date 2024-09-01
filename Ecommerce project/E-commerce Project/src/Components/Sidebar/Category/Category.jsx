import "./Category.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategorySelection,
  fetchFilteredProducts,
} from "../../../Store/filteringSlice"; // Import fetchFilteredProducts

function Category() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.filtering.selectedCategory
  );

  const handleCategoryClick = (category) => {
    if (category === "all") {
      dispatch(setCategorySelection([])); // Reset to an empty array for "All Categories"
    } else {
      dispatch(setCategorySelection([category.toLowerCase()])); // Update the category selection state
    }
    dispatch(fetchFilteredProducts()); // Fetch filtered data whenever a category is selected
  };

  // Helper function to capitalize the first letter of a string
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const categories = ["sandal", "sneakers", "flats", "heels"]; // Lowercase categories

  return (
    <aside className="category-section">
      <h4 className="category-header">Category</h4>
      <ul className="category-list">
        <li className="category-item">
          <button
            className={`category-link ${
              selectedCategory.length === 0 ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("all")}
          >
            All Categories
          </button>
        </li>
        {categories.map((category) => (
          <li key={category} className="category-item">
            <button
              className={`category-link ${
                selectedCategory.includes(category) ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {capitalize(category)}{" "}
              {/* Display with capitalized first letter */}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Category;
