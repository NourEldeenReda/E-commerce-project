import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineLanguage } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredProducts, setQuery } from "../../Store/filteringSlice";
function Nav() {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.filtering.query);

  const handleInputChange = (event) => {
    dispatch(setQuery(event.target.value));
  };

  dispatch(fetchFilteredProducts());

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <div className="navbar-brand logo-container">
          <img
            src="src\assets\Untitled_LE_auto_x2 (1)_LE_ml_resize_x2.jpg"
            alt="Logo"
          />
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
          <a href="#" className="d-flex align-items-center ms-3">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
export default Nav;
