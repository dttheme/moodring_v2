import { getPost } from "../firebase/firestore";
export function Post(id) {
  const postData = getPost(id);
  return <div>{postData}</div>;
}
