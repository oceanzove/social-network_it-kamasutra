import React from "react";
import styles from './MyPost.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";



const MyPost = (props) => {

    let postsElements = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount}/>
    );

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
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
