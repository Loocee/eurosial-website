import React from "react";
import { newProducts, availableProducts } from "../productImage";
export default function Images(props) {
  return <img className="circle-img" src={props.img} alt="product_img" />;
}
