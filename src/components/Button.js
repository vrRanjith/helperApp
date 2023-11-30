import React from "react";
import "../styles.css";

function Button(props) {
  return <button className="button-style">{props.title}</button>;
}

export default Button;
