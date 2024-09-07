import { UserForm } from "../../components/UserForm";
import { createUser } from "../../firebase/auth";
import { useLocation } from "preact-iso";
import { addUser } from "../../firebase/firestore";

export function SignUp() {
  const location = useLocation();

  const handleSignUp = (email, password) => {
    createUser(email, password)
      .then(addUser)
      .then(() => {
        location.route("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <UserForm handleSubmit={handleSignUp} btnValue={"Sign Up"} />
    </div>
  );
}
