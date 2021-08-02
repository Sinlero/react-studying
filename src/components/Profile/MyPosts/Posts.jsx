import style from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";

function Posts(props) {
    let PostsElements = props.posts.map(post => <Post text={post.message} name={post.name} likes={post.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
        }

    return (
        <div className={style.content}>
            my posts
            <div>
                <h2>New post</h2>
                <div className={style.createPost}>
                    <textarea ref={ newPostElement }></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            {PostsElements}
        </div>
    );
}

export default Posts;