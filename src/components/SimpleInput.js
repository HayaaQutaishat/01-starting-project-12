import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIstouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const nameIsInvalid = !nameIsValid && nameIsTouched;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIstouched] = useState(false);

  const emailIsValid = enteredEmail.includes("@");
  const emailIsInvalid = !emailIsValid && emailIsTouched;

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameChangeHander = (event) => {
    setEnteredName(event.target.value);
  };
  const nameBlurHandler = () => {
    setNameIstouched(true);
  };

  const emailChangeHander = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailBlurHandler = () => {
    setEmailIstouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEmailIstouched(true);
    setNameIstouched(true);
    if (!nameIsValid && !emailIsValid) {
      return;
    }
    console.log(enteredEmail);
    setEmailIstouched(false);
    setEnteredEmail("");

    setNameIstouched(false);
    setEnteredName("");
  };
  const nameFormClass = nameIsInvalid ? "form-control invalid" : "form-control";
  const emailFormClass = emailIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className={nameFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHander}
          onBlur={nameBlurHandler}
        />
        {nameIsInvalid && (
          <p className="error-text">Please enter a valid name.</p>
        )}
      </div>
      <div className={emailFormClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHander}
          onBlur={emailBlurHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">Please enter a valid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
