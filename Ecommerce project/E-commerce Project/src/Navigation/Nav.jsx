import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineLanguage } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="logo-container">
        <img src="src\assets\image.png" alt="Logo" />
      </div>
      <div className="search-container">
        <RiSearch2Line className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search among 100+ products"
        />
      </div>
      <div className="profile-container">
        <a href="#" className="language-link">
          <span className="language-text">ENG</span>
          <MdOutlineLanguage className="nav-icons" />
        </a>
        <a href="#">
          <span className="language-text">Wishlist</span>
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <span className="language-text">Your Cart</span>
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
