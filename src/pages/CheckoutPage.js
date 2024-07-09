import React from "react";
import { Navbar } from "../components/Nav";
import { CheckoutHeading } from "../components/Heading";
import Footer from "../components/Footer";
import {
  TopLeft,
  Details,
  Payment,
  ContinuePayment,
} from "../components/Details";
import { shipOption, checkoutProducts } from "../productImage";
import Images from "../components/Images";

function createShippingOptions(option) {
  return <TopLeft key={option.id} text={option.text} />;
}

function createCheckoutImages(image) {
  return <Images key={image.id} text={image.imgURL} />;
}

function CheckoutPage() {
  return (
    <div className="home-container">
      <div className="home-body">
        <Navbar />
        <CheckoutHeading />
        <div className="checkout-div">
          <div className="checkout-left">
            <div className="checkout-left-div shipping-div">
              <h3>Shipping Method</h3>
              {shipOption.map(createShippingOptions)}
            </div>
            <Details />
            <Payment />
          </div>
          <div className="checkout-right">
            <div className="continue-div">
              <div className="carousel-image-div">
                {checkoutProducts.map(createCheckoutImages)}
              </div>
              <ContinuePayment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
