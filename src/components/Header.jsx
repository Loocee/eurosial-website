import React from "react";
import { para } from "../productImage";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="left-column">
          <h1>We are timeless</h1>
        </div>
        <div className="right-column">
          <div className="content-wrapper">
            <p>{para}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
