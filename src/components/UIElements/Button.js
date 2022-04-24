import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  return <Link className="button">{props.children}</Link>;
};

export default Button;
