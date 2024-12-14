import { useState } from "react";

const useInputValue = (initialValue = "", onValueChange) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    onValueChange(e.target.value);
  };

  return {
    value,
    setValue,
    handleChange,
  };
};

export default useInputValue;
