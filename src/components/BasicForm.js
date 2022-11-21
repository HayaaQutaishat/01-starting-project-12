import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameIsInvalid,
    valueChangeHander: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((enteredFirstName) => enteredFirstName.trim() !== "");

  const {
    enteredValue: enteredLastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameIsInvalid,
    valueChangeHander: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((enteredLastName) => enteredLastName.trim() !== "");

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHander: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((enteredEmail) => enteredEmail.includes("@"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstClass = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastClass = lastNameIsInvalid ? "form-control invalid" : "form-control";

  const emailClass = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameIsInvalid && (
            <p className="error-text">Please enter a valid first name.</p>
          )}
        </div>
        <div className={lastClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Please enter a valid last name.</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">Please enter a valid first email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
