import React from "react";

import classes from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://i.pinimg.com/736x/f0/39/a3/f039a33eea94d6efb65e42c758c190f6.jpg"/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPost/>

        </div>
    )
}

export default Profile