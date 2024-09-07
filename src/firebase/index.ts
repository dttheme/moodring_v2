import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";
const firebase = initializeApp(firebaseConfig);
export { firebase };
