import React, { useState } from "react";
import PropTypes from "prop-types";

import star from "./star.svg";
import staryellow from "./staryellow.svg";
import Modal from "../Modal/Modal.js";
import Button from "../Button/Button.js";

import "./Card.scss";
import { useLocation } from "react-router-dom";

function Card({
  product,
  favoriteIds,
  onAddToFavorites,
  onAddToCart,
  onMinusProduct,
  onPlusProduct,
}) {
  const [modalFirstOpen, setModalFirstOpen] = useState(false);
  const location = useLocation().pathname;

  const openFirstModal = () => {
    setModalFirstOpen((prevSetModalFirstOpen) => !prevSetModalFirstOpen);
  };

  const bodyClickHandler = (event) => {
    if (event.target.closest(".modal__content")) {
      return;
    }
    setModalFirstOpen(false);
  };

  return (
    <li className="product-list__item">
      <div>
        <img src={product.photo} alt="phone" className="product-list__img" />
      </div>
      <div>
        <p className="product-list__title">{product.title}</p>
        <p>Color: {product.color}</p>
        <p>Article: {product.article}</p>
        <div className="product-list__buy">
          <p className="product-list__price">{product.price}$</p>
          {product.quantity > 0 && (
            <>
              <button
                type="button"
                className="quantity__btn"
                onClick={() => onMinusProduct(product.id)}
                disabled={product.quantity === 1}
              >
                -
              </button>
              <p>{product.quantity}</p>
              <button
                type="button"
                className="quantity__btn"
                onClick={() => onPlusProduct(product.id)}
              >
                +
              </button>
            </>
          )}
          {!location.includes("cart") && (
            <button
              className="product-list__add-to-fav"
              onClick={() => onAddToFavorites(product)}
            >
              <img
                src={favoriteIds.includes(product.id) ? staryellow : star}
                alt="star"
                className="product-list__star"
              />
            </button>
          )}
          <div className="btn__wrapper">
            <Button
              onClick={openFirstModal}
              backgroundColor={"rgba(0, 0, 0, 0.8)"}
              text={location.includes("cart") ? "Delete" : "Add to cart"}
            />
          </div>
          {modalFirstOpen === true && (
            <Modal
              closeButton={openFirstModal}
              text={
                location.includes("cart")
                  ? "Do you want to delete this product?"
                  : "Do you want to add this product to cart?"
              }
              actions={
                <>
                  <div className="actions__wrapper">
                    <button
                      className="actions__btn"
                      onClick={() => {
                        if (location.includes("cart")) {
                          onAddToCart(product.id, "delete");
                        } else {
                          onAddToCart(product.id);
                        }
                        openFirstModal();
                      }}
                    >
                      Ok
                    </button>
                    <button
                      className="actions__btn"
                      onClick={() => {
                        openFirstModal();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              }
              bodyClickHandler={bodyClickHandler}
            />
          )}
        </div>
      </div>
    </li>
  );
}

Card.defaultProps = {
  products: [],
  favorites: [],
};
Card.propTypes = {
  products: PropTypes.array,
  favorite: PropTypes.array,
  onAddToFavorites: PropTypes.func,
  onAddToCart: PropTypes.func,
};

export default Card;
