import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPost, changeNewPostText, likePost, setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component{

    componentDidMount() {
        //192.168.202.104:8081 | localhost:8081
        axios.get(`http://localhost:8081/api/1.0/users/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

export default connect(mapStateToProps, {setUserProfile, addPost, changeNewPostText, likePost})(ProfileContainer);