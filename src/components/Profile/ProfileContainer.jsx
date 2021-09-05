import React from "react";
import Profile from "./Profile";
import axios from "axios";

class ProfileContainer extends React.Component{

    componentDidMount() {
        this.props.setFetching(true);
        //192.168.202.104:8081 | localhost:8081
        axios.get(`http://localhost:8081/api/1.0/profile/2`).then(response => {
            this.props.setFetching(false);
            this.props.setUsers(response.data.users);
            this.props.setTotalUsersCounts(response.data.totalRecords);
        });
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

export default ProfileContainer;