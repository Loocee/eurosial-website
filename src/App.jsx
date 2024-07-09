import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/Success";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
