import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { firebase } from ".";

const auth = getAuth(firebase);

//create user
const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

//auth user
const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// sign out
const logOut = () => signOut(auth);

export { signIn, createUser, logOut };
