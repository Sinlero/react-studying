import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountsAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    //192.168.202.104:8081 | localhost:8081
    componentDidMount() {
        axios.get(`http://localhost:8081/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalUsersCounts(response.data.totalRecords);
        });
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:8081/users?page=${pageNumber}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
        });
    }


    render() {
        return <Users totalRecords={this.props.totalRecords} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage} onPageClick={this.onPageClick}
                      users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalRecords: state.usersPage.totalRecords,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCounts: (totalUsersCount) => {
            dispatch(setTotalUsersCountsAC(totalUsersCount))
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)