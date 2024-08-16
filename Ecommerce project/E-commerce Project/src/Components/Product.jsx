import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import PropTypes from "prop-types";

function Product({ img, title, newPrice, discount }) {
  // Convert discount to a decimal
  const discountDecimal = parseInt(discount) / 100;

  // Calculate previous price as an integer
  const prevPrice = Math.round(newPrice / (1 - discountDecimal));

  return (
    <article className="col product-card">
      <header className="product-image">
        <img src={img} alt={title} />
        <div className="heart-icon">
          <FiHeart />
        </div>
      </header>
      <section className="product-details">
        <h3>{title}</h3>
        <footer className="price-and-cart">
          <div>
            <p className="price-label">Price:</p>
            <span className="price">${newPrice}</span>
            <span className="old-price">${prevPrice}</span>
          </div>
          <button className="cart-button">
            <AiOutlineShoppingCart />
          </button>
        </footer>
      </section>
    </article>
  );
}

Product.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  newPrice: PropTypes.number.isRequired,
  discount: PropTypes.string.isRequired, // Ensure discount is passed as a string like "10%"
};
export default Product;
