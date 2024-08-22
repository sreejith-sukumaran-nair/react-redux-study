import { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
    
      <BrowserRouter>
        
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <Product />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Cart />
                </>
              }
            />
          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
