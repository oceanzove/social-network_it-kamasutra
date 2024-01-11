import React from "react";
import styles from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElements = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount}/>
    )
    return (
        <div className={styles.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>New post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPost