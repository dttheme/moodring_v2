import { useContext, useEffect } from "preact/hooks";
import { PostForm } from "../../components/PostForm";
import { Posts } from "../../components/Posts";

import { addPost, getPosts } from "../../firebase/firestore";
import { CurrentUserContext } from "../..";

export function Dashboard() {
  // let posts = [];
  // const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  // useEffect(() => {
  //   getPosts(currentUser.uid);
  // });
  const handleSubmitPost = (title, body) => addPost({ title, body });
  return (
    <div>
      <h2>Dashboard</h2>
      <PostForm btnValue={"Submit Post"} handleSubmit={handleSubmitPost} />
      {/* <Posts posts={posts} /> */}
    </div>
  );
}
