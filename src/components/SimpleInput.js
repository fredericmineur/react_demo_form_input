import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)

  useEffect(()=>{
    if(enteredNameIsValid) {
      console.log("Name is valid");
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onBlurNameInputHandler = event => {
    setEnteredNameIsTouched(true);
    if(enteredName.trim()===''){
      setEnteredNameIsValid (false);
      return;
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if(enteredName.trim()===''){
      setEnteredNameIsValid (false);
      return;
    }
    console.log(nameInputRef.current.value);
    setEnteredName('');
  };

  const nameInputIsInvalid = enteredNameIsTouched && !enteredNameIsValid;

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
          ref={nameInputRef}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
