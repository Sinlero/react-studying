const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";

let initialState = {
    users: [],
    pageSize: 3,
    totalRecords: 0,
    currentPage: 1
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
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalRecords: action.totalRecords
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
        users: users
    }
}

export const setCurrentPageAC = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber: pageNumber
    }
}

export const setTotalUsersCountsAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS,
        totalRecords: totalUsersCount
    }
}

export default usersReducer;