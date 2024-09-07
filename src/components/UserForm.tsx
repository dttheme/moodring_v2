import { useState } from "preact/hooks";

export function UserForm({ handleSubmit, btnValue }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = (e) => {
    return handleSubmit(email, password).catch((err) => {
      console.log(err);
      setFormError(err.message);
      e.preventDefault();
    });
  };

  return (
    <form id="userForm">
      <div style={{ color: "red" }}>{formError ? { formError } : null}</div>
      <label htmlFor="email">Email </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmail}
      />
      <br />
      <label htmlFor="password">Password </label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePassword}
      />
      <br />
      <input
        form="userForm"
        type="button"
        value={btnValue}
        onClick={handleForm}
      />
    </form>
  );
}
