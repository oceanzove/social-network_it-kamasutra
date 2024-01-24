import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";


const MyPostContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                };
                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text)
                    store.dispatch(action);
                }
                return (
                    <MyPost updateNewPostText={onPostChange}
                            newPostText={state.profilePage.newPostText}
                            addPost={addPost} posts={state.profilePage.posts}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostContainer
