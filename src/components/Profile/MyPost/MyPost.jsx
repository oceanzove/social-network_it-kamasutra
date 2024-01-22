import React from "react";
import styles from './MyPost.module.css'
import Post from "./Post/Post";



const MyPost = (props) => {

    let postsElements = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount}/>
    );

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your post text' value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>New post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPost
