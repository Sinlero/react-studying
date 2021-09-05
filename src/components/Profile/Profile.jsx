import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts";

function Profile(props) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <Posts addPost={props.addPost} changeNewPostText={props.changeNewPostText} likePost={props.likePost}
                   newPostText={props.newPostText} posts={props.postsData}/>
        </div>
    )
}

export default Profile;