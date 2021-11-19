import { useState, useReducer } from "react";

const inputInitialState = {
  value: "",
  isTouched: false,
};
const inputReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { value: '', isTouched: false };
  }
  return inputInitialState;
};

const useInput2 = (validateValue) => {
  // const [enteredInput, setEnteredInput] = useState("");
  // const [inputIsTouched, setInputIsTouched] = useState(false);

  const [inputState, dispatchInput] = useReducer(
    inputReducer,
    inputInitialState
  );

  // const inputIsValid = validateValue(enteredInput);
  const inputIsValid = validateValue(inputState.value);
  // const inputHasError = inputIsTouched && !inputIsValid;
  const inputHasError = inputState.isTouched && !inputIsValid;

  const onChangeInputHandler = (event) => {
    // setEnteredInput(event.target.value);
    dispatchInput({
      type: "CHANGE",
      value: event.target.value,
    });
  };

  const onBlurInputHandler = (event) => {
    // setInputIsTouched(true);
    dispatchInput({
      type: "BLUR"
    });
  };

  const resetValue = () => {
    // setEnteredInput('');
    // setInputIsTouched(false);
    dispatchInput({
      type: "RESET"
    });
  };

  return {
    enteredInput: inputState.value,
    inputIsValid,
    inputHasError,
    onChangeInputHandler,
    onBlurInputHandler,
    resetValue,
  };
};

export default useInput2;
