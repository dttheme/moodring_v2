import { Post } from "./Post";

export function Posts(post_ids) {
  return post_ids.forEach((id) => Post(id));
}
