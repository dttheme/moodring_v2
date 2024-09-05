import { UserForm } from "../../components/UserForm";
import { createUser } from "../../firebase/firebase";
export function SignUp() {
  const handleSignUp = (email, password) => createUser(email, password);

  return (
    <div>
      <h2>Sign Up</h2>
      <UserForm handleSubmit={handleSignUp} />
    </div>
  );
}
