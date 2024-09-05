import { Route } from "preact-iso";
import { UserForm } from "../../components/UserForm";
import { signIn } from "../../firebase/firebase";

export function Login() {
  const handleLogin = (email, password) => {
    // e.preventDefault();
    return signIn(email, password).then(() => {
      console.log("loading, set user_id in context, then we send to dashboard");
    });
  };
  return (
    <div>
      <h2>Login</h2>
      <UserForm handleSubmit={handleLogin} />
      <a href="/signup">Sign Up</a>
    </div>
  );
}
