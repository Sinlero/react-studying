import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountsAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";
import UserClass from "./UserClass";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)

export default UsersContainer;