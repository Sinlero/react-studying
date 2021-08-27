import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setFetchingAC,
    setTotalUsersCountsAC,
    setUsersAC,
    unfollowAC
} from "../../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {Spin} from "antd";
import style from "./User.module.css";
import {LoadingOutlined} from "@ant-design/icons";

class UsersContainer extends React.Component {

    //192.168.202.104:8081 | localhost:8081
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`http://localhost:8081/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`).then(response => {
            this.props.setFetching(false);
            this.props.setUsers(response.data.users);
            this.props.setTotalUsersCounts(response.data.totalRecords);
        });
    }

    onPageClick = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:8081/users?page=${pageNumber}&limit=${this.props.pageSize}`).then(response => {
            this.props.setFetching(false);
            this.props.setUsers(response.data.users);
        });
    }

    renderUsers = () => {
        return (
            <Users totalRecords={this.props.totalRecords} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageClick={this.onPageClick}
                   users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}/>)
    }


    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Spin className={style.spinner} delay={0}
                          indicator={<LoadingOutlined style={{fontSize: 24}} spin size={"large"}/>}>
                        {this.renderUsers()}
                    </Spin>
                    : this.renderUsers()}
            </>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalRecords: state.usersPage.totalRecords,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setFetching: (value) => {
            dispatch(setFetchingAC(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)