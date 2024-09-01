import "./Category.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelection } from "../../../Store/filteringSlice"; // Correct import path based on your structure

function Category() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.filtering.selectedCategory
  );

  const handleCategoryClick = (category) => {
    dispatch(setCategorySelection([category.toLowerCase()])); // Use lowercase for filtering logic
  };

  // Helper function to capitalize the first letter of a string
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const categories = ["sandal", "sneakers", "flats", "heels"]; // Lowercase categories

  return (
    <aside className="category-section">
      <h4 className="category-header">Category</h4>
      <ul className="category-list">
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
