import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import firebaseConfig from "./firebase.config";

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

//create user

const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((credential) => {
      const user = credential.user;
    })
    .catch((error) => {
      console.error(error.message);
    });

//auth user

const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((credential) => {
      const user = credential.user;
    })
    .catch((error) => {
      console.error(error.message);
    });

// sign out

import {
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
const db = getFirestore(app);

//create post

const addPost = async (data) => {
  const docRef = await addDoc(collection(db, "posts"), data);
  console.log("Document written with ID: ", docRef.id);
};

//edit post
const setPost = async (post_id, data) => {
  //   if (!post_id) {
  //   }
  return await updateDoc(doc(db, "posts", post_id), data);
};

//get post
const getPost = async (post_id) => {
  return await getDoc(doc(db, "posts", post_id)).then((docSnap) =>
    console.log(docSnap.data())
  );
};
//get posts

const getPosts = async () => {};

//delete post
const deletePost = async (post_id) => {
  await deleteDoc(doc(db, "posts", post_id));
};

//delete posts
//are you sure

export { getPost, signIn };
