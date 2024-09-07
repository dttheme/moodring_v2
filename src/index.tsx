import { render, createContext } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { Dashboard } from "./pages/Dashboard/index.js";
import { Login } from "./pages/Login/Login.js";
import { SignUp } from "./pages/Signup/Signup.js";
import { useEffect, useState } from "preact/hooks";

export const CurrentUserContext = createContext(null);

import { firebase } from "./firebase/index.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebase);

export function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );
    return unsubscribe;
  }, []);

  return (
    <LocationProvider>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
        <main>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route default component={NotFound} />
          </Router>
        </main>
      </CurrentUserContext.Provider>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
