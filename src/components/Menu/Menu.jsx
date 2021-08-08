import style from "./Menu.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

function Menu(props) {
    return(
        <nav className={style.nav}>
            <div className={style.link}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to="/news" activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.link} >
                <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
            </div>
            <div>
                <Friends friends={props.friends}/>
            </div>
        </nav>
    );
}

export default Menu;