import React from "react";
import styles from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {

    let postsData = [
        {id: 1, message: 'Hi how are?', likesCount: 12},
        {id: 2, message: 'Its my second post', likesCount: 22},
        {id: 3, message: 'Its my first post', likesCount: 11},
    ]
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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}></Post>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}></Post>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}></Post>
            </div>
        </div>
    )
}

export default MyPost