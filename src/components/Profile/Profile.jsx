import React from "react";

import style from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import {NavLink} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}

export default Profile