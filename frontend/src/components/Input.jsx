<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";

>>>>>>> 6c52ff0 (feat(frontend): add reusable UI components and service layer)
=======
>>>>>>> 95e647d (feat(frontend): complete login flow UI and service integration (Day 6))
const Input = ({
  type = "text",
  name,
  value,
<<<<<<< HEAD
<<<<<<< HEAD
  onChange,
  placeholder,
=======
  placeholder,
  onChange,
>>>>>>> 6c52ff0 (feat(frontend): add reusable UI components and service layer)
=======
  onChange,
  placeholder,
>>>>>>> 95e647d (feat(frontend): complete login flow UI and service integration (Day 6))
  className = "",
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
<<<<<<< HEAD
<<<<<<< HEAD
      onChange={onChange}
      placeholder={placeholder}
      className={className}
=======
      placeholder={placeholder}
      onChange={onChange}
      className={`input ${className}`}
>>>>>>> 6c52ff0 (feat(frontend): add reusable UI components and service layer)
=======
      onChange={onChange}
      placeholder={placeholder}
      className={className}
>>>>>>> 95e647d (feat(frontend): complete login flow UI and service integration (Day 6))
    />
  );
};

export default Input;
