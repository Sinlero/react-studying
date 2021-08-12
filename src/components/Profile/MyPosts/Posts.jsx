import style from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";


function Posts(props) {

    debugger;
    let PostsElements = props.posts.map(post => <Post id={post.id} text={post.message} name={post.name}
                                                      likes={post.likes}
                                                      likeCallback={props.likePost}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let onChange = (event) => {
        let text = event.target.value;
        props.changeNewPostText(text);
    };

    return (
        <div className={style.content}>
            <h2>My posts</h2>
            <div>
                <h3>New post</h3>
                <div className={style.createPost}>
                    <textarea onChange={onChange} value={props.newPostText}
                              placeholder="Enter you post text"></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {PostsElements.reverse()}
        </div>
    );
}

export default Posts;