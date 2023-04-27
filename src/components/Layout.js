import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./components.scss";

function Layout({ favoriteIds, cart }) {
  return (
    <>
      <Header favorites={favoriteIds} cart={cart} />

      <main className="main">
        <div className="main-container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Layout;
