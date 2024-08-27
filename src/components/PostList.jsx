import Post from "./Post"
import classes from './PostList.module.css'; 

export default function PostList() {
    return (
        <ul className={classes.posts}>
         <Post author="Audrius" body="Another React practice project!"/>
         <Post author="Andrew" body="React is great! It is my favorite front end librery!"/>
    </ul>
    )
};