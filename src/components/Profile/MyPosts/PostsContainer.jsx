import React from "react";
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
    likePostActionCreator
} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changeNewPostText: (text) => {
            dispatch(changeNewPostTextActionCreator(text));
        },
        likePost: (id) => {
            dispatch(likePostActionCreator(id));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;