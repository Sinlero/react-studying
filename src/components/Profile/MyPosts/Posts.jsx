import style from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";

function Posts(props) {
    let PostsElements = props.posts.map(post => <Post text={post.message} name={post.name} likes={post.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onChange = () => {
        let text = newPostElement.current.value;
        props.changePostText(text);
    };

    return (
        <div className={style.content}>
            my posts
            <div>
                <h2>New post</h2>
                <div className={style.createPost}>
                    <textarea onChange={onChange} ref={newPostElement} value={props.newPostText}></textarea>
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