import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIstouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const nameIsInvalid = !enteredName && nameIsTouched;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIstouched] = useState(false);

  const emailIsValid = enteredEmail.trim() !== "";
  const emailIsInvalid = !enteredEmail && emailIsTouched;

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameChangeHander = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHander = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEmailIstouched(true);
    setNameIstouched(true);
    if (!nameIsValid && !emailIsValid) {
      return;
    }
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
        />
      </div>
      <div className={emailFormClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHander}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
