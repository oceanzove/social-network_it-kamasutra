import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";



const MyPostContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action);
    };

    return (
        <MyPost  updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText}
                 addPost={addPost} posts={state.profilePage.posts}/>
    )
}

export default MyPostContainer
