import React, { useEffect, useState } from "react";
import { ReactComponent as Verizon } from "../images/Logo.svg.svg";
import { ReactComponent as Paypal } from "../images/paypal_logo.svg.svg";
import { ReactComponent as Mastercard } from "../images/mastercard_symbol.svg.svg";
import { ReactComponent as Visa } from "../images/visa_inc_logo.svg.svg";
import { ReactComponent as Verve } from "../images/verve_direct_logo.png.svg";

import { para } from "../productImage";
import Legal from "./Legal";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer>
      <h4>Eurosial</h4>
      <hr />

      <div className="footer-second-div">
        <div className="footer-slogan">
          <p>{para}</p>
        </div>
        <div className="legal-container">
          <Legal />
          <Legal />
          <Legal />
        </div>
      </div>
      <div className="footer-second-div">
        <div className="copy">
          <p>All rights reserved &copy; {year}</p>
        </div>
        <div className="trusted">
          <span>Trusted by</span>
          <Verizon />
          <Paypal />
          <Mastercard />
          <Visa />
          <Verve />
        </div>
      </div>
    </footer>
  );
}
