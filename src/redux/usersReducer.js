import avatar1 from "../avatars/avatar1.jpg";
import avatar2 from "../avatars/avatar2.jpg";
import avatar3 from "../avatars/avatar3.jpg";
import avatar from "../avatars/reactLogo.png";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        // {
        //     id: 1,
        //     fullName: "Andrey",
        //     avatar: avatar,
        //     status: "Java proger",
        //     location: {city: "BlagaVegas", country: "Russia"},
        //     followed: false
        // },
        // {
        //     id: 2,
        //     fullName: "Ilon Mask",
        //     avatar: avatar1,
        //     status: "Tesla top",
        //     location: {city: "Ontario", country: "USA"},
        //     followed: true
        // },
        // {
        //     id: 3,
        //     fullName: "Jokeeeer",
        //     avatar: avatar2,
        //     status: "ha-ha-ha-ha",
        //     location: {city: "Moskow", country: "Russia"},
        //     followed: false
        // },
        // {
        //     id: 4,
        //     fullName: "JavaScrpiteaser",
        //     avatar: avatar3,
        //     status: "ya tupoi",
        //     location: {city: "Kiev", country: "Ukraine"},
        //     followed: true
        // }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (id) => {
    return {
        type: FOLLOW,
        id: id

    }
}

export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;