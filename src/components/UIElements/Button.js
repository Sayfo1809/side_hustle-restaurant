import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaChevronRight } from "react-icons/fa";

import "./Button.css";

const Button = (props) => {
  const btnCTA = <FaChevronRight className="btn__icon" />;
  const btnShop = <FaShoppingBasket className="btn__icon" />;

  let classes = "button ";

  if (props.btnType === "cta") classes += "btn--cta";

  return (
    <Link className={classes} to="/">
      {props.children} {props.btnType === "shop" ? btnShop : btnCTA}
    </Link>
  );
};

export default Button;
