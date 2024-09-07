import { useLocation } from "preact-iso";
import { useContext } from "preact/hooks";
import { CurrentUserContext } from "..";
import { logOut } from "../firebase/auth";

export function Header() {
  const location = useLocation();

  let user = useContext(CurrentUserContext).currentUser;

  let handleLogout = () => {
    logOut();
    location.route("/");
  };

  return (
    <header>
      Mood Ring
      <nav>
        <a href="/" class={location.url == "/" && "active"}>
          Home
        </a>
        {/* <a href="/404" class={url == "/404" && "active"}>
          404
        </a> */}
        {!user?.email ? (
          <a href="/login" class={location.url == "/login" && "active"}>
            Login
          </a>
        ) : (
          <>
            <a href="/dashboard">{user.email}</a>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}
