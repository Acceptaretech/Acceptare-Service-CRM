<<<<<<< HEAD
=======
import React from "react";

>>>>>>> 6c52ff0 (feat(frontend): add reusable UI components and service layer)
const Input = ({
  type = "text",
  name,
  value,
<<<<<<< HEAD
  onChange,
  placeholder,
=======
  placeholder,
  onChange,
>>>>>>> 6c52ff0 (feat(frontend): add reusable UI components and service layer)
  className = "",
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
<<<<<<< HEAD
      onChange={onChange}
      placeholder={placeholder}
      className={className}
=======
      placeholder={placeholder}
      onChange={onChange}
      className={`input ${className}`}
>>>>>>> 6c52ff0 (feat(frontend): add reusable UI components and service layer)
    />
  );
};

export default Input;
