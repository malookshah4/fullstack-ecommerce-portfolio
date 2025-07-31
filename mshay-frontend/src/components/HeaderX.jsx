import { useContext } from "react";
import { FiSun, FiMoon, FiShoppingCart } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/cartSlice";
import { ThemeContext } from "../context/ThemeContext"; // 1. Import the ThemeContext
import "./HeaderX.css";
import { Link } from "react-router-dom";

const HeaderX = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items);
  const { theme, toggleTheme } = useContext(ThemeContext); // 2. Get theme and toggle function

  const numItemsInCart = cartItems
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <header className="header-x">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a
            href="/"
            className="d-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <p>BY-MALOOK SHAH</p>
          </a>

          <nav>
            <ul className="nav-pages-list">
              <li>
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="nav-link">
                  CATALOG
                </Link>
              </li>
              <li>
                <Link to="/trending" className="nav-link">
                  TRENDING
                </Link>
              </li>
              {/* Change this from <a> to <Link> */}
              <li>
                <Link to="/about" className="nav-link">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <div className="action-icons">
            {/* 3. Create a single, functional theme button */}
            <button
              className="icon-btn"
              aria-label="Toggle Theme"
              onClick={toggleTheme}
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>

            <button
              className="icon-btn"
              aria-label="Open Shopping Cart"
              onClick={handleCartClick}
            >
              <FiShoppingCart />
              {numItemsInCart > 0 && (
                <span className="cart-badge">{numItemsInCart}</span>
              )}
            </button>

            <button className="icon-btn" aria-label="Toggle Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderX;
