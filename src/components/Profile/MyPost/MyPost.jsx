import React from "react";
import classes from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            MyPosts
            <div>
                New Post
            </div>
            <div className='posts'>
                <Post/>
            </div>
        </div>
    )
}

export default MyPost