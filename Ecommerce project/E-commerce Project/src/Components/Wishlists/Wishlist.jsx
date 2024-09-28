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

  return (
    <div>
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.img} alt={item.title} />
            <p>Price: ${item.price}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
