import { signIn } from "../firebase/firebase";
import { useState } from "preact/hooks";
export function UserForm({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <form onSubmit={handleForm}>
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
      <input type="button" value="Login" />
    </form>
  );
}
