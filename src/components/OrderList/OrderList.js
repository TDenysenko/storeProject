import React from "react";
import "../../pages/Order.js";

function OrderList({ products, onAddToCart }) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartDetails = cart.map((item) => {
    if (products.find((product) => product.id === item.id)) {
      return {
        ...products.find((product) => product.id === item.id),
        quantity: item.quantity,
      };
    }

    return item;
  });

  console.log("product list re-render");

  const totalPrice = cartDetails.reduce((sum, curr) => {
    return sum + Number(curr.price.replace(" ", "")) * Number(curr.quantity);
  }, 0);

  return (
    <>
      <ul className="order-list">
        {cartDetails.map((product) => {
          return (
            <li key={product.id} className="order-list__item">
              <div className="order-list__product">
                <img
                  src={product.photo}
                  alt="phone"
                  className="order-list__img"
                />
                <p>
                  {product.title}, {product.quantity}, {product.price}$
                </p>
              </div>
              <div>
                <button
                  onClick={() => onAddToCart(product.id, "delete")}
                  className="order-list__delete"
                >
                  x
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        Total price: ${totalPrice} for total {cart.length} items
      </div>
    </>
  );
}

export default OrderList;
