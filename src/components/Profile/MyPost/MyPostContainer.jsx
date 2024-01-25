import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action)
        },
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action);
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer
