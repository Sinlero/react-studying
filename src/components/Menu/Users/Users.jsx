import React from "react";
import style from "./User.module.css";
import reactLogo from "../../../avatars/reactLogo.png"
import axios from "axios";

function Users(props) {

    function getUsers() {
        if (props.users.length === 0) {
            axios.get("http://localhost:8080/users").then(response => {
                props.setUsers(response.data);
            });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(user =>
                <div className={style.usersItem} key={user.id}>

                    <div className={style.avatar}>
                        <img src={user.photos !== "null" ? user.photos : reactLogo} alt="ava"/>
                    </div>
                    <div>Status: {user.status}</div>
                    <div>{user.name}</div>
                    <div>{"user.location.city"}</div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(user.id)}>Follow</button>}
                    </div>
                    <div>{"user.location.country"}</div>

                </div>)}
        </div>
    )
}

export default Users;