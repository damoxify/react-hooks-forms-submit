import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validation: To check if first name is provided
    if (firstName.trim() === "") {
      setErrors(["First name is required!"]);
      return; // Exit the function early if there are errors
    }

    // To create a new form data object
    const formData = { firstName: firstName, lastName: lastName };

    // To add the form data to the submitted data array
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);

    // To clear the form fields and errors
    setFirstName("");
    setLastName("");
    setErrors([]);
  }

  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* To conditionally render error messages */}
      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
