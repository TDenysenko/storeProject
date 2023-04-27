import React from "react";
import { Link } from "react-router-dom";

import CardList from "../components/CardList/CardList";
import "./style/Cart.scss";

function Cart({
  products,
  favorites,
  onAddToCart,
  onAddToFavorites,
  onMinusProduct,
  onPlusProduct,
}) {
  return (
    <>
      <CardList
        products={products}
        favorites={favorites}
        onAddToFavorites={onAddToFavorites}
        onAddToCart={onAddToCart}
        onMinusProduct={onMinusProduct}
        onPlusProduct={onPlusProduct}
      />
      <div className="btn-buy--wrapper">
        <Link to="/order">
          <button type="button" className="btn-buy">
            proceed to checkout
          </button>
        </Link>
      </div>
    </>
  );
}

export default Cart;
