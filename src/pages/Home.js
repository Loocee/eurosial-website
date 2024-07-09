import React from "react";
import { Navbar, Filter } from "../components/Nav";
import Header from "../components/Header";
import { NewProduct, AvailableProduct } from "../components/Heading";
import { newProducts, availableProducts } from "../productImage";
import { List } from "../components/ProductListing";
import Footer from "../components/Footer";
import { PreviousButton, NextButton } from "../components/Control";

function createProduct(product) {
  return <List key={product.id} img={product.imgURL} />;
}

export default function Home() {
  const handlePreviousClick = () => {
    // Code to handle previous button click
  };

  const handleNextClick = () => {
    // Code to handle next button click
  };
  return (
    <div className="home-body">
      <Navbar />
      <Header />
      <Filter />
      <div className="heading new-product">
        <div>
          <NewProduct />
        </div>
        <div className="new-products"> {newProducts.map(createProduct)}</div>
      </div>
      <div className="heading available-products">
        <div>
          <AvailableProduct />
        </div>
        <div className="new-products">
          {availableProducts.map(createProduct)}
        </div>
        <div className="control-container center-container">
          <div className="home-control">
            <PreviousButton onClick={handlePreviousClick} />
            <NextButton onClick={handleNextClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
