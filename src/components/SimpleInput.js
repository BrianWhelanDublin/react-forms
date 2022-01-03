import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enterNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false)
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNamesIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNamesIsValid && enterNameIsTouched;

  const emailIsValid = enteredEmail.trim().includes("@");
  const emailIsInvalid = !emailIsValid && enteredEmailIsTouched;

  let formIsValid = false

  if (enteredNamesIsValid && emailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (event) => setEnteredName(event.target.value);
  const emailChangeHandler = event => setEnteredEmail(event.target.value)
  const nameInputBlurHandler = () => setEnteredNameIsTouched(true);
  const emailBlurHandler = () => setEnteredEmailIsTouched(true)

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true)
    if (!enteredNamesIsValid || !emailIsValid) {
      return
    };
    console.log(enteredName)
    console.log(enteredEmail)
    setEnteredName("");
    setEnteredNameIsTouched(false)
    setEnteredEmail("")
    setEnteredEmailIsTouched(false)
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`${nameInputIsInvalid ? "form-control invalid" : "form-control"}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputIsInvalid && <p>Name must not be empty</p>}
      </div>
      <div className={`${emailIsInvalid ? "form-control invalid" : "form-control"}`}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' onChange={emailChangeHandler} value={enteredEmail} onBlur={emailBlurHandler} />
        {emailIsInvalid && <p>Must enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form >
  );
};

export default SimpleInput;
