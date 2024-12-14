"use client";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  size?: "large" | "medium" | "small";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  link?: string;
}

const Button: React.FC<Props> = ({
  className = "",
  children,
  size = "medium",
  onClick,
  link,
  ...props
}) => {
  const sizeClasses = {
    large: "py-3 px-6 text-lg",
    medium: "py-2 px-4 text-base",
    small: "py-1 px-2 text-sm",
  };

  const baseClasses = `rounded-lg transition-all duration-75 hover:bg-hover inline-block ${sizeClasses[size]} ${className}`;

  return link ? (
    <Link {...props} className={baseClasses} href={link}>
      {children}
    </Link>
  ) : (
    <button {...props} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export default Button;
