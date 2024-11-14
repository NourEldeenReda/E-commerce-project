import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  updateQuantity,
  removeFromCart,
} from "../../Store/cartSlice";
import "./cart.css";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  console.log("Cart items:", cartItems);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(item.id, Number(e.target.value))
              }
            />
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
