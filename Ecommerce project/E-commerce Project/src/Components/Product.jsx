import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { addToWishlist } from "../Store/wishlistSlice";

// Function to update cart in backend
const updateCartInDatabase = async (userId, updatedCart) => {
  await fetch(`http://localhost:3000/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cart: updatedCart }),
  });
};

// Function to update wishlist in backend
const updateWishlistInDatabase = async (userId, updatedWishlist) => {
  await fetch(`http://localhost:3000/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ wishlist: updatedWishlist }),
  });
};

function Product({ id, img, title, price, discount }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user); // Get current logged-in user
  const cartItems = useSelector((state) => state.cart.items); // Get cart from Redux
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems); // Get wishlist from Redux

  const handleAddToCart = () => {
    const product = { id, title, price, img };
    dispatch(addToCart(product)); // Add product to Redux
    const updatedCart = [...cartItems, product]; // Update Redux state
    updateCartInDatabase(currentUser.id, updatedCart); // Update backend
  };

  const handleAddToWishlist = () => {
    const product = { id, title, price, img };
    dispatch(addToWishlist(product)); // Add product to Redux
    const updatedWishlist = [...wishlistItems, product]; // Update Redux state
    updateWishlistInDatabase(currentUser.id, updatedWishlist); // Update backend
  };

  return (
    <section className="col product-card">
      <header className="product-image">
        <img src={img} alt={title} />
        <div className="heart-icon" onClick={handleAddToWishlist}>
          <FiHeart />
        </div>
      </header>
      <section className="product-details">
        <h3>{title}</h3>
        <footer className="price-and-cart">
          <div>
            <p className="price-label">Price:</p>
            <span className="price">${price}</span>
            <span className="old-price">${discount}</span>
          </div>
          <button className="cart-button" onClick={handleAddToCart}>
            <AiOutlineShoppingCart />
          </button>
        </footer>
      </section>
    </section>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.string.isRequired,
};

export default Product;
