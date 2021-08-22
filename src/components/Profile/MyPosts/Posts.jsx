import style from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Button, Input} from 'antd';

function Posts(props) {


    let PostsElements = props.posts.map(post => <Post key={post.id} id={post.id} text={post.message} name={post.name}
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
            <div className={style.createPost}>
                <h2>My posts</h2>
                <h3>New post</h3>
                {/*<div className={style.createPost}>*/}
                {/*    <textarea onChange={onChange} value={props.newPostText}*/}
                {/*              placeholder="Enter you post text"></textarea>*/}
                {/*</div>*/}
                <div>
                    <Input.TextArea autoSize={true} rows={4} value={props.newPostText} onChange={onChange}
    showCount={true} placeholder={"Enter you post text"}/>
                </div>
                {/*<div>*/}
                {/*    <button onClick={onAddPost}>Add post</button>*/}
                {/*</div>*/}
                <div>
                    <Button className={style.postButton} type="primary" onClick={onAddPost}>Add post</Button>
                </div>
            </div>
            {PostsElements.reverse()}
        </div>
    );
}

export default Posts;