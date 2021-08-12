import style from "./Menu.module.css";
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

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
            <div className={style.link}>
                <NavLink to="/users" activeClassName={style.active}>Find Users</NavLink>
            </div>
            <div>
                <FriendsContainer/>
            </div>
        </nav>
    );
}

export default Menu;