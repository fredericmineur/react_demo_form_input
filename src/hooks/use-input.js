import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredInput, setEnteredInput] = useState("");
    const [enteredInputIsTouched, setEnteredInputIsTouched] = useState(false);

    const enteredInputIsValid = validateValue(enteredInput);
    const inputHasError = enteredInputIsTouched && !enteredInputIsValid;


    const inputChangeHandler = event => {
        setEnteredInput(event.target.value);
    }

    const onBlurInputHandler = event => {
        setEnteredInputIsTouched(true);
    }

    const resetInput = () => {
        setEnteredInput('');
        setEnteredInputIsTouched(false);
    }
    return {
        inputHasError,
        inputChangeHandler,
        onBlurInputHandler,
        resetInput,
        enteredInput,
        enteredInputIsValid
    }
}

export default useInput;