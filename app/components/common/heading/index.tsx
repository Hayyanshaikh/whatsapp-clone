"use client";
import React from "react";

// Props Type
interface Props {
  text: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Heading: React.FC<Props> = ({ text, size, className }) => {
  switch (size) {
    case "small":
      return <h2 className="text-lg md:text-xl font-semibold">{text}</h2>;
    case "medium":
      return <h2 className="text-xl md:text-2xl font-semibold">{text}</h2>;
    case "large":
      return <h2 className="text-2xl md:text-3xl font-semibold">{text}</h2>;
    default:
      return (
        <h2
          className={`${
            className ? className : ""
          } text-lg md:text-2xl font-semibold`}
        >
          {text}
        </h2>
      );
  }
};

export default Heading;
