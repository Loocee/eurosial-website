import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "./Images";

export function Cart() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="card cart-div">
      <div className="cart-div-div">
        <div className="top-div">
          <div className="space-between font-size-16">
            <span>Discount</span>
            <span>0 USD</span>
          </div>
          <div className="space-between font-size-16">
            <span>Tax</span>
            <span>7 USD</span>
          </div>
          <div className="space-between font-size-20">
            <h4>Subtotal</h4>
            <h4>3200 USD</h4>
          </div>
          <div className="space-between font-size-24">
            <h4>Total</h4>
            <h4>1700 USD</h4>
          </div>
        </div>
        <button className="cart-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export function CartList(props) {
  return (
    <div className="card card-div">
      <div className="card-card">
        <div className="card-left">
          <Images img={props.img} />
        </div>
        <div className="card-right">
          <div>
            <div className="right-left">
              <div className="right-left-top">
                <h3>Herness Black Luxury watch</h3>
                <p>Black color</p>
              </div>
              <div className="right-left-bottom">
                <button>1</button>
              </div>
            </div>
            <div className="right-right">
              <p>1700 USD</p>
              <div className="right-right-bottom">
                <span>Edit</span>
                <button type="delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
