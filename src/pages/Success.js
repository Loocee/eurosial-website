import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Nav";
import { CheckoutHeading } from "../components/Heading";
import { TopLeft, Details, Payment } from "../components/Details";
import { shipOption } from "../productImage";

function createShippingOptions(option) {
  return <TopLeft key={option.id} text={option.text} />;
}

function SuccessPage() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/shop");
  };

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
                <h4>Congratulations, your order was Successful.</h4>
              </div>
              <button
                className="carousel-div-btn success-btn"
                onClick={handleCheckout}
              >
                Back to Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
