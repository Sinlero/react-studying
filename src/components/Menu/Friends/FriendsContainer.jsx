import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        friends: state.dialogsPage.dialogsData
    }
}

const FriendsContainer = connect(mapStateToProps, null)(Friends);

export default FriendsContainer;