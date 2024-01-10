import React from "react";
import styles from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {

    let postsData = [
        {id: 1, message: 'Hi how are?', likesCount: 12},
        {id: 2, message: 'Its my second post', likesCount: 22},
        {id: 3, message: 'Its my first post', likesCount: 11},
    ]

    let postsElements = postsData.map(
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