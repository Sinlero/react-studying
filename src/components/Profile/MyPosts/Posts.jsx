import style from "./Posts.module.css";
import Post from "./Post/Post";

function Posts(props) {
    let PostsElements = props.posts.map(post => <Post text={post.message} name={post.name} likes={post.likes}/>)
    return (
        <div className={style.content}>
            my posts
            <div>
                <h2>New post</h2>
                <div className={style.createPost}>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {PostsElements}
        </div>
    );
}

export default Posts;