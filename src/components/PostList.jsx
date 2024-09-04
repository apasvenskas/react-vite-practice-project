import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

export default function PostList() {
  const [modalIsVisable, setModalvisable] = useState(true); 
  const [textBody, setTextBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function hideModalHandler() {
    setModalvisable(false);
  }

  function textBodyChangeHandler(event) {
    setTextBody(event.target.value);
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  let modalContent;

  if (modalIsVisable){
    modalContent =
    <Modal 
      onClose={hideModalHandler}>
      <NewPost
        onTextBody={textBodyChangeHandler}
        onNameChange={nameChangeHandler}
      />
    </Modal>
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredName} body={textBody} />
        <Post
          author="Andrew"
          body="React is great! It is my favorite front end librery!"
        />
      </ul>
    </>
  );
}
