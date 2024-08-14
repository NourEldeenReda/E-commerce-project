import "./Category.css";

function Category() {
  return (
    <div className="category-section">
      <h4 className="category-header">Category</h4>
      <ul className="category-list">
        <li className="category-item">
          <a href="#" className="category-link">
            T-Shirt
          </a>
        </li>
        <li className="category-item">
          <a href="#" className="category-link active">
            Sweatshirt
          </a>
        </li>
        <li className="category-item">
          <a href="#" className="category-link">
            Dress
          </a>
        </li>
        <li className="category-item">
          <a href="#" className="category-link">
            Pants and Skirt
          </a>
        </li>
        <li className="category-item">
          <a href="#" className="category-link">
            Swimsuit
          </a>
        </li>
        <li className="category-item">
          <a href="#" className="category-link">
            Stuff and Accessories
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Category;
