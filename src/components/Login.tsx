import { signIn } from "../../firebase";
import { useState } from "preact/hooks";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    return signIn(email, password).then(() => {
      console.log("loading, set user_id in context, then we send to dashboard");
    });
  };
  return (
    <div>
      <input type="email" name="" id="" />
      <input type="password" name="" id="" />
      <input type="button" value="Login" onClick={login} />
    </div>
  );
}
