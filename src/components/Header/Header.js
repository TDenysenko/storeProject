import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./Header.scss";

function Header({ favorites, cart }) {
  return (
    <header className="header">
      <div>
        <Link to="/" className="header___logo-link">
          <img src="./icons/apple.svg" alt="apple" width="35" height="35" />
        </Link>
      </div>
      <div className="header__content">
        <Link to="/favorites" className="header__links">
          <img src="./icons/star.svg" alt="star" />
          {favorites.length > 0 && (
            <span className="header__counters">{favorites.length}</span>
          )}
        </Link>
        <Link to="/cart" className="header__links">
          <img src="./icons/shop.svg" alt="cart" className="header__cart" />
          {cart.length > 0 && (
            <span className="header__counters">{cart.length}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  favorites: [],
  cart: [],
};

Header.propTypes = {
  favorites: PropTypes.array,
  cart: PropTypes.array,
};

export default Header;
