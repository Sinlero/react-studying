import style from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profileReducer";


function Posts(props) {

    let PostsElements = props.posts.map(post => <Post id={post.id} text={post.message} name={post.name} likes={post.likes}
                                                      dispatch={props.dispatch}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onChange = (event) => {
        let text = event.target.value;
        props.dispatch(changeNewPostTextActionCreator(text));
    };

    return (
        <div className={style.content}>
            my posts
            <div>
                <h2>New post</h2>
                <div className={style.createPost}>
                    <textarea onChange={onChange} value={props.newPostText}
                              placeholder="Enter you post text"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {PostsElements.reverse()}
        </div>
    );
}

export default Posts;