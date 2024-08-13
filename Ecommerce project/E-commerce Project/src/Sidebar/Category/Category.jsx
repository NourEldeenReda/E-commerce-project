import "./Category.css";
function Category() {
  return (
    <div className="category-section">
      <h2>Category</h2>
      <ul>
        <li>T-Shirt</li>
        <li className="active">Sweatshirt</li>
        <li>Dress</li>
        <li>Pants and Skirt</li>
        <li>Swimsuit</li>
        <li>Stuff and Accessories</li>
      </ul>
    </div>
  );
}

export default Category;
