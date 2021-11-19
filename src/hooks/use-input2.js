import { useState } from "react";

const useInput2 = (validateValue) => {
    const [enteredInput, setEnteredInput] = useState("");
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const inputIsValid = validateValue(enteredInput);
    const inputHasError = inputIsTouched && !inputIsValid;

    const onChangeInputHandler = event => {
        setEnteredInput(event.target.value);
    }

    const onBlurInputHandler = event => {
        setInputIsTouched(true);
    }

    const resetValue = () => {
        setEnteredInput('');
        setInputIsTouched(false);
    }

    return {
        enteredInput,
        inputIsValid,
        inputHasError,
        onChangeInputHandler,
        onBlurInputHandler,
        resetValue
    }


}

export default useInput2