import React from "react";
import { Navbar } from "../components/Nav";
import { CartHeading } from "../components/Heading";
import Footer from "../components/Footer";
import { Cart, CartList } from "../components/Cart";
import { cartProducts } from "../productImage";
import { PreviousButton, NextButton } from "../components/Control";
import { SimilarProduct } from "../components/Heading";
import { List } from "../components/ProductListing";
import { similarProducts } from "../productImage";

function createCart(prod) {
  return <CartList key={prod.id} img={prod.imgURL} />;
}

function createProduct(product) {
  return <List key={product.id} img={product.imgURL} />;
}

function CartPage() {
  const handlePreviousClick = () => {
    // Code to handle previous button click
  };

  const handleNextClick = () => {
    // Code to handle next button click
  };

  return (
    <div className="home-container cart-container">
      <div className="home-body cart-body">
        <Navbar />
        <CartHeading />
        <div className="cart-grid">
          <div> {cartProducts.map(createCart)}</div>
          <Cart />
        </div>

        <div className="heading available-products similar-products">
          <div>
            <SimilarProduct />
          </div>
          <div className="new-products">
            {similarProducts.map(createProduct)}
          </div>
          <div className="control-container center-container">
            <div className="home-control">
              <PreviousButton onClick={handlePreviousClick} />
              <NextButton onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
