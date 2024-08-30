import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";

export default function PostList() {
  const [textBody, setTextBody] = useState('');   
  const [enteredName, setEnteredName] = useState(''); 

  function textBodyChangeHandler(event){
    setTextBody(event.target.value);
  }

  function nameChangeHandler(event){
    setEnteredName(event.target.value);
  }

  return (
    <>
    <NewPost onTextBody={textBodyChangeHandler} onNameChange={nameChangeHandler} />
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
