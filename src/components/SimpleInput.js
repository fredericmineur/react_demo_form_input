import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const emailPatternRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const enteredEmailIsValid = enteredEmail.match(emailPatternRegex);
  console.log(enteredEmailIsValid);

  const nameInputIsInvalid = enteredNameIsTouched && !enteredNameIsValid;
  const emailInputIsInvalid = enteredEmailIsTouched && !enteredEmailIsValid;
  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  const inputChangeHandler = (event) => {
    if (event.target.id === "name") {
      setEnteredName(event.target.value);
    } else if (event.target.id === "email") {
      setEnteredEmail(event.target.value);
    }
  };

  const onBlurInputHandler = (event) => {
    if (event.target.id === "name") {
      setEnteredNameIsTouched(true);
    } else if (event.target.id === "email") {
      setEnteredEmailIsTouched(true);
    }
  };

  // const onBlurNameInputHandler = (event) => {
  //   setEnteredNameIsTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={onBlurInputHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="text"
          id="email"
          onChange={inputChangeHandler}
          onBlur={onBlurInputHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please type a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
