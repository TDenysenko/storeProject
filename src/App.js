import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

import Layout from "./components/Layout";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));

    const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localStorageCart);

    const localStorageFavIds =
      JSON.parse(localStorage.getItem("favoriteIds")) || [];

    setFavoriteIds(localStorageFavIds);
    const localStorageFavProducts =
      JSON.parse(localStorage.getItem("favoriteProducts")) || [];

    setFavoriteProducts(localStorageFavProducts);
  }, []);

  const handleAddToFavorites = (product) => {
    if (!favoriteIds.includes(product.id)) {
      setFavoriteIds((prevFavoritesIds) => [...prevFavoritesIds, product.id]);
      setFavoriteProducts((prevProducts) => [...prevProducts, product]);
      localStorage.setItem(
        "favoriteIds",
        JSON.stringify([...favoriteIds, product.id])
      );
      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify([...favoriteProducts, product])
      );
    } else {
      setFavoriteIds((prevFavoritesIds) =>
        prevFavoritesIds.filter((id) => id !== product.id)
      );

      setFavoriteProducts((prevFavProducts) =>
        prevFavProducts.filter((prevProduct) => prevProduct.id !== product.id)
      );
      localStorage.setItem(
        "favoriteIds",
        JSON.stringify(favoriteIds.filter((id) => id !== product.id))
      );

      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify(
          favoriteProducts.filter((item) => item.id !== product.id)
        )
      );
    }
  };

  const handleAddToCart = (productId, action = "add") => {
    if (action === "add") {
      if (!cart.some((product) => product.id === productId)) {
        const newProduct = { id: productId, quantity: 1 };
        setCart((prevCart) => [...prevCart, newProduct]);

        localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
      } else {
        setCart((prevCart) =>
          prevCart.map((product) => {
            if (product.id === productId) {
              return { ...product, quantity: product.quantity + 1 };
            }
            return product;
          })
        );

        localStorage.setItem(
          "cart",
          JSON.stringify(
            cart.map((product) => {
              if (product.id === productId) {
                return {
                  ...product,
                  quantity: product.quantity + 1,
                };
              }

              return product;
            })
          )
        );
      }
    } else {
      setCart((prevCart) =>
        prevCart.filter((product) => product.id !== productId)
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(cart.filter((product) => product.id !== productId))
      );
    }
  };

  const cartProducts = cart.map((item) => {
    const product = products.find((product) => product.id === item.id);
    return {
      ...item,
      ...product,
    };
  });

  const minusQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((prevItem) => {
        if (prevItem.id === productId) {
          return {
            ...prevItem,
            quantity: prevItem.quantity - 1,
          };
        }

        return prevItem;
      })
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
      )
    );
  };

  const plusQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((prevItem) => {
        if (prevItem.id === productId) {
          return {
            ...prevItem,
            quantity: prevItem.quantity + 1,
          };
        }

        return prevItem;
      })
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        })
      )
    );
  };

  console.log(products, "products in app");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout favoriteIds={favoriteIds} cart={cart} />}
        >
          <Route
            index
            element={
              <Home
                products={products}
                favoriteIds={favoriteIds}
                onAddToFavorites={handleAddToFavorites}
                onAddToCart={handleAddToCart}
                onMinusProduct={minusQuantity}
                onPlusProduct={plusQuantity}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                products={products}
                favoriteIds={favoriteIds}
                onAddToFavorites={handleAddToFavorites}
                onAddToCart={handleAddToCart}
                onMinusProduct={minusQuantity}
                onPlusProduct={plusQuantity}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                products={cartProducts}
                favoriteIds={favoriteIds}
                onAddToFavorites={handleAddToFavorites}
                onAddToCart={handleAddToCart}
                onMinusProduct={minusQuantity}
                onPlusProduct={plusQuantity}
              />
            }
          />
          <Route
            path="/order"
            element={
              <Order
                products={products}
                favoriteIds={favoriteIds}
                onAddToCart={handleAddToCart}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
