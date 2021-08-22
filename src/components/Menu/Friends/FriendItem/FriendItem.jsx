import style from "./FriendItem.module.css"
import {Menu as AntMenu} from "antd";

function FriendItem(props) {
    return (
    <div className="friend">
        <AntMenu.Item key={props.name} className="name">
        <img className={style.avatar} src={props.avatar} alt="ava"/>
        {props.name}
        </AntMenu.Item>
    </div>
    )
}

export default FriendItem;