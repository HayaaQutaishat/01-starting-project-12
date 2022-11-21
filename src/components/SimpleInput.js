import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHander: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((enteredName) => enteredName.trim() !== "");

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHander: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((enteredEmail) => enteredEmail.includes("@"));

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid && !emailIsValid) {
      return;
    }
    console.log(enteredName);
    resetEmailInput();
    resetNameInput();
  };
  const nameFormClass = nameHasError ? "form-control invalid" : "form-control";
  const emailFormClass = emailHasError
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className="error-text">Please enter a valid name.</p>
        )}
      </div>
      <div className={emailFormClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
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
