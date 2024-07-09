import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PreviousButtonIcon, NextButtonIcon } from "../components/Control";
import Carousel from "../components/CarouselIcon";

export function TopLeft(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="shipping-option">
      <div className="shipping-option-text">
        <h4 className="font-size-24">{props.text}</h4>
        <p className="font-size-16">
          We ship immediately take between 7 - 8 working days
        </p>
      </div>
      <div className="shipping-option-radio">
        <input
          className={`custom-radio ${isChecked ? "checked" : ""}`}
          type="radio"
          name="flexRadioDefault"
          checked={isChecked}
          onChange={handleRadioClick}
          style={{ color: isChecked ? "#606060" : "" }}
        />
      </div>
    </div>
  );
}
export function Details() {
  return (
    <div className="checkout-left-div detail-div">
      <h3>Personal Details</h3>
      <form className="payment-form">
        <div className="form-group-cvv space-between">
          <div className="cvv">
            <label htmlFor="input-fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="input-fname"
              className="form-control"
              placeholder="Joseph"
              required
            />
          </div>
          <div className="cvv">
            <label htmlFor="input-sname" className="form-label">
              Surname
            </label>
            <input
              type="text"
              id="input-sname"
              className="form-control"
              placeholder="Peter"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="input-state" className="form-label">
            State
          </label>
          <input
            type="text"
            id="input-staate"
            className="form-control"
            placeholder="Lagos State"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-number" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="input-number"
            className="form-control"
            pattern="[0-9]{11}"
            placeholder="07013213455"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="joanqe@gmail.com"
          />
        </div>
      </form>
    </div>
  );
}

export function Payment() {
  return (
    <div className="checkout-left-div pay-div">
      <h3>Payment</h3>
      <form className="payment-form">
        <div className="payment-options">
          <label className="radio-button">
            <button className="button-label">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              Card
            </button>
          </label>
          <label className="radio-button">
            <button className="button-label grey">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              Bank Transfer
            </button>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="input-cardname" className="form-label">
            Card Holder Name
          </label>
          <input
            type="text"
            id="input-cardname"
            className="form-control"
            placeholder="Joseph"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="input-cardnum" className="form-label">
            Card Holder Number
          </label>
          <input
            type="text"
            id="input-cardnum"
            className="form-control"
            pattern="[0-9]{12}"
            placeholder="674xxx39xx13"
            required
          />
        </div>
        <div className="space-between form-group-cvv">
          <div className="cvv">
            <label htmlFor="input-date" className="form-label">
              Expiration date
            </label>
            <input
              type="month"
              id="input-date"
              className="form-control"
              required
            />
          </div>
          <div className="cvv">
            <label htmlFor="input-cvv" className="form-label">
              CVV
            </label>
            <input
              type="text"
              id="input-cvv"
              className="form-control"
              pattern="[0-9]{3}"
              placeholder="070"
              required
            />
          </div>
        </div>
      </form>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">
          Save my details for future purchases
        </label>
      </div>
    </div>
  );
}

export function ContinuePayment() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/success");
  };
  const handlePreviousClick = () => {
    // Code to handle previous button click
  };

  const handleNextClick = () => {
    // Code to handle next button click
  };

  return (
    <div className="continue-div-bottom">
      <div className="carousel-div">
        <PreviousButtonIcon onClick={handlePreviousClick} />
        <Carousel />
        <NextButtonIcon onClick={handleNextClick} />
      </div>
      <div className="pricing-div">
        <div className="space-between font-size-20">
          <span>Subtotal</span>
          <span>3200 USD</span>
        </div>
        <div className="space-between font-size-20">
          <span>Shipping</span>
          <span>60 USD</span>
        </div>
        <div className="space-between font-size-24">
          <h4>Total</h4>
          <h4>1700 USD</h4>
        </div>
      </div>
      <div className="carousel-btn-div">
        <button className="carousel-div-btn" onClick={handleCheckout}>
          Continue to Payment
        </button>
        <button className="carousel-div-btn gray">Add More Items</button>
      </div>
    </div>
  );
}
