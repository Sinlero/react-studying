import FriendItem from "./FriendItem/FriendItem";
import style from "./Friends.module.css"

function Friends(props) {
    let friendsList = props.friends.map( friend => <FriendItem name={friend.name} avatar={friend.avatar}/>)
    return (
        <div>
            <div className={style.caption}>
                Friends
            </div>
            <div className={style.friends}>
                {friendsList}
            </div>
        </div>
    )
}

export default Friends;