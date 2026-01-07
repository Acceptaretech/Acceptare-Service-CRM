<<<<<<< HEAD
const Button = ({
  label,
  type = "button",
=======
import React from "react";

const Button = ({
  type = "button",
  text,
>>>>>>> 6c52ff0 (feat(frontend): add reusable UI components and service layer)
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
<<<<<<< HEAD
      className={className}
    >
      {label}
=======
      className={`btn ${className}`}
    >
      {text}
>>>>>>> 6c52ff0 (feat(frontend): add reusable UI components and service layer)
    </button>
  );
};

export default Button;
