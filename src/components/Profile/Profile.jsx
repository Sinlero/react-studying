import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";

function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <PostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;