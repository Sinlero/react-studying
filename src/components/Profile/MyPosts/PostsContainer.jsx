import React from "react";
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
    likePostActionCreator
} from "../../../redux/profileReducer";
import Posts from "./Posts";


function PostsContainer(props) {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let changeNewPostText = (text) => {
        props.store.dispatch(changeNewPostTextActionCreator(text));
    };

    let likePost = (id) => {
        props.store.dispatch(likePostActionCreator(id));
    }

    return (
        <Posts addPost={addPost} changeNewPostText={changeNewPostText} posts={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText} likePost={likePost}/>
    );
}

export default PostsContainer;