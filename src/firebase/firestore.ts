import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore/lite";
import { firebase } from ".";

const db = getFirestore(firebase);
// const analytics = getAnalytics(app);

//get user
const getUser = async (user_id) => {
  return await getDoc(doc(db, "users", user_id));
};
//edit user
const editUser = async (user_id, data) => {
  return await updateDoc(doc(db, "users", user_id), data);
};
//create user
const addUser = async (data) => {
  console.log(data);
  var user = {
    id: data.user.uid,
    email: data.user.email,
  };
  return addDoc(collection(db, "users"), user);
};

//create post
const addPost = async (data) => {
  return await addDoc(collection(db, "posts"), data);
};

//edit post
const setPost = async (post_id, data) => {
  //   if (!post_id) {
  //   }
  return await updateDoc(doc(db, "posts", post_id), data);
};

//get post
const getPost = async (post_id) => {
  return await getDoc(doc(db, "posts", post_id));
};

//get posts
const getPosts = async (user_id) => {
  const q = query(collection(db, "posts"), where("user_id", "==", user_id));
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts;
};

//delete post
const deletePost = async (post_id) => {
  await deleteDoc(doc(db, "posts", post_id));
};

//delete posts
//are you sure

export { getPost, getUser, addUser, addPost, getPosts };
