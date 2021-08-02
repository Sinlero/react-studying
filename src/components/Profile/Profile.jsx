import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.state.postsData} addPost={props.addPost} />
        </div>
    )
}

export default Profile;