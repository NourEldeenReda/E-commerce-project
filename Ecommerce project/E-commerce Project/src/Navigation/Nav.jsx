import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineLanguage } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <div className="navbar-brand logo-container">
          <img src="src/assets/image.png" alt="Logo" />
        </div>

        <div className="search-container mx-auto position-relative">
          <RiSearch2Line className="search-icon position-absolute" />
          <input
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

export default Nav;
