import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.state.postsData}
                   newPostText={props.state.newPostText}
                   dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;