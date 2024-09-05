
import classes from './NewPost.module.css';

function NewPost({onTextBody, onNameChange, onCancel}) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onTextBody}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onNameChange}/>
      </p>
      <p className={classes.actions}/>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
    </form>
  );
}

export default NewPost;