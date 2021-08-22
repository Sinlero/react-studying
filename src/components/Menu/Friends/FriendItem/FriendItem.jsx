import style from "./FriendItem.module.css"
import {Menu as AntMenu} from "antd";

function FriendItem(props) {
    return (
    <div className="friend">
        <AntMenu.Item>
        <img className={style.avatar} src={props.avatar} alt="ava"/>
    <div className="name">
        {props.name}
    </div>
        </AntMenu.Item>
    </div>
    )
}

export default FriendItem;