import React from "react";
import Card from "../Card/Card";

function CardList({
  products,
  favoriteIds,
  onAddToFavorites,
  onAddToCart,
  onMinusProduct,
  onPlusProduct,
}) {
  return (
    <>
      <div>
        <ul className="product-list">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                product={product}
                favoriteIds={favoriteIds}
                onAddToFavorites={onAddToFavorites}
                onAddToCart={onAddToCart}
                onMinusProduct={onMinusProduct}
                onPlusProduct={onPlusProduct}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CardList;
