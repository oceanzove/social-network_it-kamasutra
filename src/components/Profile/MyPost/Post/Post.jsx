import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://i.pinimg.com/564x/38/1c/01/381c01a8c8d5e99b52c0f20151b1929b.jpg'/>
            <span> {props.message} </span>
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post