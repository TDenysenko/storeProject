import React from "react";

import CardList from "../components/CardList/CardList";

function Favorites({ favoriteIds, onAddToFavorites, onAddToCart }) {
  const favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts"));

  if (favoriteProducts.length === 0) {
    // margin-top
    return (
      <>
        <h1 style={{ margin: "100px" }}>No favorite products yet ...</h1>
      </>
    );
  }
  return (
    <>
      <CardList
        products={favoriteProducts}
        favoriteIds={favoriteIds}
        onAddToFavorites={onAddToFavorites}
        onAddToCart={onAddToCart}
      />
    </>
  );
}

export default Favorites;
