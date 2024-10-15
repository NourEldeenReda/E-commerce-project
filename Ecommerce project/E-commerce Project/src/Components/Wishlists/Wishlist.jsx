import "./Wishlist.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectWishlistItems,
  removeFromWishlist,
} from "../../Store/wishlistSlice";

const Wishlist = () => {
  const wishlistItems = useSelector(selectWishlistItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };
  console.log("Wishlist items:", wishlistItems);

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
