import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIstouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHander = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = () => {
    setIstouched(true);
  };

  return {
    enteredValue,
    valueIsValid,
    hasError,
    valueChangeHander,
    valueBlurHandler,
  };
};

export default useInput;
