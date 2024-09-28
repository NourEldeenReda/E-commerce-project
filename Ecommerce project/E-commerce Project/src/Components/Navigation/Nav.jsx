import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineLanguage } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredProducts, setQuery } from "../../Store/filteringSlice";
import { selectCurrentUser, logout } from "../../Store/userSlice"; // Import user slice for auth
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useSelector((state) => state.filtering.query);
  const user = useSelector(selectCurrentUser); // Get the current user from Redux

  const handleInputChange = (event) => {
    dispatch(setQuery(event.target.value));
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate("/login"); // Navigate to login after logout
  };

  dispatch(fetchFilteredProducts());

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <div className="navbar-brand logo-container">
          <img src={logo} alt="Logo" />
        </div>

        <div className="search-container mx-auto position-relative">
          <RiSearch2Line className="search-icon position-absolute" />
          <input
            value={query}
            onChange={handleInputChange}
            type="text"
            className="form-control search-input"
            placeholder="Search among 100+ products"
          />
        </div>

        <div className="profile-container d-flex align-items-center">
          <a href="#" className="language-link d-flex align-items-center">
            <span className="language-text">ENG</span>
            <MdOutlineLanguage className="nav-icons" />
          </a>
          <a href="#" className="d-flex align-items-center ms-3">
            <span className="language-text">Wishlist</span>
            <FiHeart className="nav-icons" />
          </a>
          <a href="#" className="d-flex align-items-center ms-3">
            <span className="language-text">Your Cart</span>
            <AiOutlineShoppingCart className="nav-icons" />
          </a>

          {user ? (
            <div className="d-flex align-items-center ms-3">
              <span className="username-text">{user.username}</span>{" "}
              {/* Display the logged-in user's name */}
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" className="d-flex align-items-center ms-3">
              <AiOutlineUserAdd className="nav-icons" />
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,
};

export default Nav;
