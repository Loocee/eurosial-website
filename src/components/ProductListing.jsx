import React from "react";
import { ReactComponent as Like } from "../images/Vector (4).svg";
import { ReactComponent as Shop } from "../images/cart.svg";
import Images from "./Images";
import { Link } from "react-router-dom";
export function List(props) {
  return (
    <div className="product-frame">
      <div className="top">
        <Like />

        <Images img={props.img} />
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="bottom space-between">
        <div>
          <h3 className="font-size-24 ">Herness Black tint</h3>
          <p className="font-size-20">1700 USD</p>
        </div>
        <button className="add-cart">
          <Link to="/cart" className="center-container">
            <Shop />
          </Link>
        </button>
      </div>
    </div>
  );
}
