import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  

  const enteredNameIsValid = enteredName.trim() !== '';

  const nameInputIsInvalid = enteredNameIsTouched && !enteredNameIsValid;

  // useEffect(()=>{
  //   if(enteredNameIsValid) {
  //     console.log("Name is valid");
  //   }
  // }, [enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // if((event.target.value).trim() !=='') {
    //   setEnteredNameIsValid(true);
    // }
  };

  const onBlurNameInputHandler = event => {
    setEnteredNameIsTouched(true);
    // if(enteredName.trim()===''){
    //   setEnteredNameIsValid (false);
    // }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    // if(enteredName.trim()===''){
    //   setEnteredNameIsValid (false);
    //   return;
    // }
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
