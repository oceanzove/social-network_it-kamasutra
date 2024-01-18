import React from "react";
import styles from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElements = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount}/>
    );

    let newPostElement = React.createRef();
    let addPost = () => {
        let type = 'ADD-POST'
        props.dispatch({ type: type})
    };

    let onPostChange = () => {
        let type = 'UPDATE-NEW-POST-TEXT'
        let text = newPostElement.current.value;
        props.dispatch({ type: type, newText: text});
    };

    return (
        <div className={styles.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>New post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPost
