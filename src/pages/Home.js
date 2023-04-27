import React from "react";

import CardList from "../components/CardList/CardList";

function Home({
  products,
  favoriteIds,
  onAddToCart,
  onAddToFavorites,
  onMinusProduct,
  onPlusProduct,
}) {
  return (
    <CardList
      products={products}
      favoriteIds={favoriteIds}
      onAddToFavorites={onAddToFavorites}
      onAddToCart={onAddToCart}
      onMinusProduct={onMinusProduct}
      onPlusProduct={onPlusProduct}
    />
  );
}

export default Home;
