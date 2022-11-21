import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [isTouched, setIstouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHander = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  //   const valueChangeHander = (event) => {
  //     setEnteredValue(event.target.value);
  //   };

  //   const valueBlurHandler = () => {
  //     setIstouched(true);
  //   };

  //   const reset = () => {
  //     setIstouched(false);
  //     setEnteredValue("");
  //   };

  return {
    enteredValue: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHander,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
