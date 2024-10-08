import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState, useEffect } from "react";

export default function PostList({isPsoting, onStopPosting}) {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json();
      setPosts(resData.posts);
    }
    fetchPosts(); 
  }, []);

  function addPostHandler(postData){
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
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
      {posts.length > 0 &&  <ul className={classes.posts}>
        {/* key should be something else like id, body is sufficient for now, but not a good practise */}
        {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)} 
      </ul>
      }
      {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Go ahead and post something!!</p>
        </div>
      )}
    </>
  );
}
