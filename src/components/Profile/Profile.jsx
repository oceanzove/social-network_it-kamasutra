import React from "react";

import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.profilePage.posts} addPost={props.addPost}
                    newPostText={props.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile
