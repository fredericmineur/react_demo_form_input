import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = value => {
    const emailPatternRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    return value.match(emailPatternRegex);
  }

  const {
    enteredInput: enteredFirstName,
    inputIsValid: enteredFirstNameIsValid,
    inputHasError: inputFirstNameHasError,
    onChangeInputHandler: onChangeFirstNameHanlder,
    onBlurInputHandler: onBlurFirstNameHandler,
    resetValue: resetFirstName,
  } = useInput2(isNotEmpty);

  const inputFirstNameClass = inputFirstNameHasError
    ? "form-control invalid"
    : "form-control";

  const {
    enteredInput: enteredLastName,
    inputIsValid: enteredLastNameIsValid,
    inputHasError: inputLastNameHasError,
    onChangeInputHandler: onChangeLastNameHanlder,
    onBlurInputHandler: onBlurLastNameHandler,
    resetValue: resetLastName,
  } = useInput2(isNotEmpty);

  const inputLastNameClass = inputLastNameHasError
    ? "form-control invalid"
    : "form-control";

  const {
    enteredInput: enteredEmail,
    inputIsValid: enteredEmailIsValid,
    inputHasError: inputEmailHasError,
    onChangeInputHandler: onChangeEmailHanlder,
    onBlurInputHandler: onBlurEmailHandler,
    resetValue: resetEmail,
  } = useInput2(isEmail);


  const inputEmailClass = inputEmailHasError
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();
    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }
    const credentials = {
      "first name": enteredFirstName,
      "last name": enteredLastName,
      email: enteredEmail,
    };
    console.log(credentials);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={formHandler}>
      <div className="control-group">
        <div className={inputFirstNameClass}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={onChangeFirstNameHanlder}
            onBlur={onBlurFirstNameHandler}
            value={enteredFirstName}
          />
          {inputFirstNameHasError && (
            <p className="error-text">First Name must be not empty</p>
          )}
        </div>
        <div className={inputLastNameClass}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={onChangeLastNameHanlder}
            onBlur={onBlurLastNameHandler}
            value={enteredLastName}
          />
          {inputLastNameHasError && (
            <p className="error-text">Last Name must be not empty</p>
          )}
        </div>
      </div>
      <div className={inputEmailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={onChangeEmailHanlder}
          onBlur={onBlurEmailHandler}
          value={enteredEmail}
        />
        {inputEmailHasError && (
          <p className="error-text">Email must be valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
