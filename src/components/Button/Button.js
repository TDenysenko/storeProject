import React from "react";

import "./Button.scss";

function Button({ onClick, backgroundColor, text }) {
  return (
    <button
      type="button"
      className="btn"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
