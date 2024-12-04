import React from "react";

const Button = ({ className, children, size = "medium", onClick }) => {
  const sizeClasses = {
    large: "py-3 px-6 text-lg",
    medium: "py-2 px-4 text-base",
    small: "py-1 px-2 text-sm",
  };

  return (
    <button
      onClick={onClick}
      className={`hover:bg-hover ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
