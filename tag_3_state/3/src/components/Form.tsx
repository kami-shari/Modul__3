import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <>
      <form>
        <label htmlFor="FirstName">Firstname</label>
        <input
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
          id="firstName"
          name="firstName"
          placeholder="Firstname"
          type="text"
        />

        <label htmlFor="lastName">Lastname</label>
        <input
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
          id="lastname"
          name="lastname"
          placeholder="Lastname"
          type="text"
        />

        <label htmlFor="email">E-Mail</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          id="email"
          name="email"
          placeholder="E-Mail"
          type="email"
        />

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <p>Firstname: {firstName}</p>
      <p>Lastname: {lastName}</p>
      <p>Email: {email}</p>
    </>
  );
}

export default Form;
