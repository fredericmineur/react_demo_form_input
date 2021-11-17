import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== '';

  const nameInputIsInvalid = enteredNameIsTouched && !enteredNameIsValid;
  const formIsValid = enteredNameIsValid;

  // useEffect(()=>{
  //   if(enteredNameIsValid){
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onBlurNameInputHandler = event => {
    setEnteredNameIsTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    setEnteredName('');
    setEnteredNameIsTouched(false);
  };

  

  const nameInputClasses = nameInputIsInvalid ? 
  "form-control invalid" : "form-control";

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
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
