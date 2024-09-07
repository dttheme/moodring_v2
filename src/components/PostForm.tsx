import { useState } from "preact/hooks";

export function PostForm({ handleSubmit, btnValue }) {
  const [formError, setFormError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //   const [emoji, setEmoji] = useState(null);
  //   const [color, setColor] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleForm = (e) => {
    return handleSubmit().catch((err) => {
      console.log(err);
      setFormError(err.message);
      e.preventDefault();
    });
  };

  //   const handleEmojiClick = (e, emojiObj) => {
  //     setEmoji(emojiObj);
  //   };

  return (
    <form action="">
      <div style={{ color: "red" }}>{formError ? { formError } : null}</div>
      <label htmlFor="title">Title </label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={handleTitle}
      />{" "}
      <br />
      <label htmlFor="body">Body </label>
      <input
        type="text"
        name="body"
        id="body"
        value={body}
        onChange={handleBody}
      />{" "}
      <br />
      <input type="button" value={btnValue} onClick={handleForm} />
    </form>
  );
}
