import React from "react";

const Button = ({
  type = "button",
  text,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
