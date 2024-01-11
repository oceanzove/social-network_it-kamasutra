import React from "react";

import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
    let postsData = [
        {id: 1, message: 'Hi how are?', likesCount: 12},
        {id: 2, message: 'Its my second post', likesCount: 22},
        {id: 3, message: 'Its my first post', likesCount: 11},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={postsData}/>
        </div>
    )
}

export default Profile