import React from "react";
import styles from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
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
                <Post message='Hi, how are u?' likeCount='10'/>
                <Post message="It's my first post" likeCount='15'/>
            </div>
        </div>
    )
}

export default MyPost