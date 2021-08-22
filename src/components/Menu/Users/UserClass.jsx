import React from "react";
import style from "./User.module.css";
import axios from "axios";
import reactLogo from "../../../avatars/reactLogo.png";
import {Descriptions, Button, Avatar} from "antd";


class UserClass extends React.Component {

    //192.168.202.104:8081 | localhost:8081
    componentDidMount() {
        axios.get(`http://192.168.202.104:8081/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalUsersCounts(response.data.totalRecords);

        });
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://192.168.202.104:8081/users?page=${pageNumber}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
        });
    }

    // paging = () => {
    //     let active = 2;
    //     let items = [];
    //     for (let number = 1; number <= 5; number++) {
    //         items.push(
    //             <Pagination.Item key={number} active={number === active}>
    //                 {number}
    //             </Pagination.Item>,
    //         );
    //     }
    //     return (
    //         <div>
    //             <Pagination size="sm">{items}</Pagination>
    //             <Button variant="primary">Primary</Button>{' '}
    //         </div>
    //     )
    // }

    render() {
        let pagesCount = Math.ceil(this.props.totalRecords / this.props.pageSize);

        // let pages = [];
        //
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i);
        // }
        return (
            <div>
                {/*{this.paging()}*/}
                {/*<div className={style.pages}>*/}
                {/*    {pages.map(page => {*/}
                {/*            return <span className={this.props.currentPage === page ? style.selectedPage : style.page}*/}
                {/*                         onClick={(event => {this.onPageClick(page)})}>{page}</span>*/}
                {/*        }*/}
                {/*    )}*/}
                {/*</div>*/}
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
            </div>)
    }
}

export default UserClass;