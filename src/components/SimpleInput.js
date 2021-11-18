
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    enteredInput: enteredName,
    inputHasError: nameInputHasError,
    inputChangeHandler: nameInputChangeHandler,
    onBlurInputHandler: onBlurNameInputHandler,
    resetInput: resetNameInput,
    enteredInputIsValid: enteredNameIsValid
  } = useInput(value => value.trim() !== "");

  const emailPatternRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  const {
    enteredInput: enteredEmail,
    inputHasError: emailInputHasError,
    inputChangeHandler: emailInputChangeHandler,
    onBlurInputHandler: onBlurEmailInputHandler,
    resetInput: resetEmailInput,
    enteredInputIsValid: enteredEmailIsValid
  } = useInput(value => value.match(emailPatternRegex));


  const formIsValid = enteredNameIsValid && enteredEmailIsValid;


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={onBlurNameInputHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={onBlurEmailInputHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
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
