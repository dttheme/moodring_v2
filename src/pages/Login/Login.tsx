import { useLocation } from "preact-iso";
import { UserForm } from "../../components/UserForm";
import { signIn } from "../../firebase/auth";
import { getUser } from "../../firebase/firestore";

export function Login() {
  const location = useLocation();

  const handleLogin = (email, password) => {
    return signIn(email, password)
      .then((user) => getUser(user.user.uid))
      .then(() => {
        location.route("/dashboard");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <UserForm handleSubmit={handleLogin} btnValue={"Login"} />
      <a href="/signup">Sign Up</a>
    </div>
  );
}
