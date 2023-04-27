import React, { useContext, useEffect } from "react";
import FormOrder from "../components/Form/Form.js";
import OrderList from "../components/OrderList/OrderList.js";

import "./style/Order.scss";

function Order({ products, favoriteIds, onAddToCart }) {
  return (
    <>
      <section className="page-order__wrapper">
        <div className="order__wrapper">
          <p className="order__text">Your order</p>
          <OrderList
            products={products}
            favoriteIds={favoriteIds}
            onAddToCart={onAddToCart}
          />
        </div>
        <div className="form__wrapper">
          <FormOrder products={products} onAddToCart={onAddToCart} />
        </div>
      </section>
    </>
  );
}

export default Order;
