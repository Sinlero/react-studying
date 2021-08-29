import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFetching, setPageSize,
    setTotalUsersCounts,
    setUsers,
    unfollow
} from "../../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {Spin} from "antd";
import style from "./User.module.css";
import {LoadingOutlined} from "@ant-design/icons";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.getRequest(this.props.currentPage, this.props.pageSize);
    }

    getRequest = (page, pageSize) => {
        this.props.setFetching(true);
        //192.168.202.104:8081 | localhost:8081
        axios.get(`http://localhost:8081/users?page=${page}&limit=${pageSize}`).then(response => {
            this.props.setFetching(false);
            this.props.setUsers(response.data.users);
            this.props.setTotalUsersCounts(response.data.totalRecords);
        });
    }

    onPageClick = (page, pageSize) => {
        this.props.setCurrentPage(page);
        this.props.setPageSize(pageSize);
        this.getRequest(page, pageSize);
    }

    onChangePageSize = (current, size) => {
        this.props.setCurrentPage(current);
        this.props.setPageSize(size);
    }

    renderUsers = () => {
        return (
            <Users totalRecords={this.props.totalRecords} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageClick={this.onPageClick}
                   onChangePageSize={this.onChangePageSize}
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

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setPageSize,setTotalUsersCounts, setFetching
})(UsersContainer)