import style from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/state";


function Posts(props) {

    let PostsElements = props.posts.map(post => <Post text={post.message} name={post.name} likes={post.likes}/>);

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
                    <textarea onChange={onChange} value={props.newPostText}></textarea>
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