import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
  const [textBody, setTextBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function textBodyChangeHandler(event) {
    setTextBody(event.target.value);
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    const postData = {
      body: textBody,
      author: enteredName
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={textBodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={nameChangeHandler}/>
      </p>
      <p className={classes.actions}/>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
    </form>
  );
}

export default NewPost;