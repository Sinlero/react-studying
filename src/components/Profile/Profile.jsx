import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.state.postsData}
                   addPost={props.addPost}
                   newPostText={props.state.newPostText}
                   changePostText={props.changePostText}/>
        </div>
    )
}

export default Profile;