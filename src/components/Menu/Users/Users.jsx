import React from "react";
import style from "./User.module.css";
import reactLogo from "../../../avatars/reactLogo.png"
import {Avatar, Button, Descriptions, Pagination} from "antd";

function Users(props) {

    let pagesCount = Math.ceil(props.totalRecords / props.pageSize);

    return (
        <div>
            <div className={style.pagination}>
                <Pagination current={props.currentPage} total={pagesCount * 10} onChange={props.onPageClick}/>
            </div>

            {props.users.map(user =>
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
                        ? <Button type="primary"  onClick={() => props.unfollow(user.id)} value="Unfollow">Unfollow</Button>
                        : <Button type="primary" onClick={() => props.follow(user.id)} value="Follow">Follow</Button>}
                </div>)}
            <div className={style.pagination}>
                <Pagination current={props.currentPage} total={pagesCount * 10} onChange={props.onPageClick}/>
            </div>
        </div>)
}

export default Users;