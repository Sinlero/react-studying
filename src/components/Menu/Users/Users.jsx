import React from "react";
import style from "./User.module.css";
import avatar from "../../../avatars/reactLogo.png";
import avatar1 from "../../../avatars/avatar1.jpg";
import avatar2 from "../../../avatars/avatar2.jpg";
import avatar3 from "../../../avatars/avatar3.jpg";

function Users(props) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: "Andrey",
                avatar: avatar,
                status: "Java proger",
                location: {city: "BlagaVegas", country: "Russia"},
                followed: false
            },
            {
                id: 2,
                fullName: "Ilon Mask",
                avatar: avatar1,
                status: "Tesla top",
                location: {city: "Ontario", country: "USA"},
                followed: true
            },
            {
                id: 3,
                fullName: "Jokeeeer",
                avatar: avatar2,
                status: "ha-ha-ha-ha",
                location: {city: "Moskow", country: "Russia"},
                followed: false
            },
            {
                id: 4,
                fullName: "JavaScrpiteaser",
                avatar: avatar3,
                status: "ya tupoi",
                location: {city: "Kiev", country: "Ukraine"},
                followed: true
            }
        ])
    }

    return (
        <div>
            {props.users.map(user =>
                <div className={style.usersItem} key={user.id}>

                    <div className={style.avatar}>
                        <img src={user.avatar} alt="ava"/>
                    </div>
                    <div>Status: {user.status}</div>
                    <div>{user.fullName}</div>
                    <div>{user.location.city}</div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(user.id)}>Follow</button>}
                    </div>
                    <div>{user.location.country}</div>

                </div>)}
        </div>
    )
}

export default Users;