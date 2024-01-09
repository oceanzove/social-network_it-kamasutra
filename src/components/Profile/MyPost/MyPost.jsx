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
                <Post message='Hi, how are u?' likeCount='10'/>
                <Post message="It's my first post" likeCount='15'/>
            </div>
        </div>
    )
}

export default MyPost