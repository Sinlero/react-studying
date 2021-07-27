import style from "./FriendItem.module.css"

function FriendItem(props) {
    return (
    <div className="friend">
        <img className={style.avatar} src={props.avatar} alt="ava"/>
    <div className="name">
        {props.name}
    </div>
    </div>
    )
}

export default FriendItem;