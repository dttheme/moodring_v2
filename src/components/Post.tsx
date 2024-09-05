import { getPost } from "../firebase/firebase";
export function Post(id) {
  const postData = getPost(id);
  return <div>{postData}</div>;
}
