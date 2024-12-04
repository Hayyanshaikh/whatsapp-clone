import React, { useEffect, useState } from "react";
import useInputValue from "../../hooks/useInputValue";
import { X } from "@phosphor-icons/react";
import Button from "../button";

const Input = ({
  placeholder,
  icon,
  showIcon = true,
  showClose = false,
  onValueChange,
}) => {
  const { value, handleChange, setValue } = useInputValue("", onValueChange);
  const [isCloseHidden, setIsCloseHidden] = useState(false);

  useEffect(() => {
    if (value !== "") {
      setIsCloseHidden(true);
    } else {
      setIsCloseHidden(false);
    }
  }, [value]);

  // handleRemoveValue function
  const handleRemoveValue = () => {
    setValue("");
    setIsCloseHidden(false);
  };

  return (
    <div className="relative">
      {showIcon && icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`pr-4 py-1.5 bg-light rounded-lg outline-none w-full ${
          showIcon ? "pl-11" : ""
        }`}
      />

      {showClose && isCloseHidden && (
        <Button
          onClick={handleRemoveValue}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-transparent !p-0"
        >
          <X size={14} className="text-icon" weight="bold" />
        </Button>
      )}
    </div>
  );
};

export default Input;
