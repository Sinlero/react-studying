import style from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} activeClassName={style.active}>
            <div className={style.dialogsItems}>
                <div className={style.dialogItem}>
                    <img className={style.avatar} src={props.avatar} alt="avatar"/>
                    <div className={style.name}>{props.name}</div>
                </div>
            </div>
        </NavLink>
    );
}

export default DialogItem;