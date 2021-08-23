import React from "react";
import style from "./User.module.css";
import axios from "axios";
import reactLogo from "../../../avatars/reactLogo.png";
import {Descriptions, Button, Avatar, Pagination} from "antd";


class UserClass extends React.Component {

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
        let pagesCount = Math.ceil(this.props.totalRecords / this.props.pageSize);

        return (
            <div>
                <div className={style.pagination}>
                    <Pagination current={this.props.currentPage} total={pagesCount * 10} onChange={this.onPageClick}/>
                </div>

                {this.props.users.map(user =>
                    <div className={style.userItem} key={user.id}>
                            <Avatar size={64} src={user.photos !== null ? user.photos : reactLogo} alt="avatar" />
                            <Descriptions title="User Info">
                                <Descriptions.Item label="User Name" span={3}>{user.name}</Descriptions.Item>
                                <Descriptions.Item label="Status" span={3}>{user.status}</Descriptions.Item>
                                <Descriptions.Item label="Live" >{"user.location.city"}</Descriptions.Item>
                                <Descriptions.Item label="Address" >{"user.location.address"}</Descriptions.Item>
                                <Descriptions.Item label="Country" >{"user.location.country"}</Descriptions.Item>
                            </Descriptions>
                            {user.followed
                                ? <Button type="primary"  onClick={() => this.props.unfollow(user.id)} value="Unfollow">Unfollow</Button>
                                : <Button type="primary" onClick={() => this.props.follow(user.id)} value="Follow">Follow</Button>}
                    </div>)}
                <div className={style.pagination}>
                    <Pagination current={this.props.currentPage} total={pagesCount * 10} onChange={this.onPageClick}/>
                </div>
            </div>)
    }
}

export default UserClass;