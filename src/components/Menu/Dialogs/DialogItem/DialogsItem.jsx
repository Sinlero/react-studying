import style from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialogsItems}>
            <img className={style.avatar} src={props.avatar} alt="avatar"/>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;