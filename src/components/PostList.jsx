import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

export default function PostList({isPsoting, onStopPosting}) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    setPosts((existingPost) => [postData, ...existingPost]);
  }

  return (
    <>
      {isPsoting && (
        <Modal 
        onClose={onStopPosting}>
        <NewPost
          onCancel={onStopPosting}
          onAddPost={addPostHandler}
        />
      </Modal>
      )}
      <ul className={classes.posts}>
        {/* key should be something else like id, body is sufficient for now, but not a good practise */}
        {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)} 
      </ul>
    </>
  );
}
