import React from "react";

const Heading = ({ text, size }) => {
  switch (size) {
    case "small":
      return <h2 className="text-lg md:text-xl font-semibold">{text}</h2>;
    case "medium":
      return <h2 className="text-xl md:text-2xl font-semibold">{text}</h2>;
    case "large":
      return <h2 className="text-2xl md:text-3xl font-semibold">{text}</h2>;
    default:
      return <h2 className="text-lg md:text-2xl font-semibold">{text}</h2>;
  }
};

export default Heading;
