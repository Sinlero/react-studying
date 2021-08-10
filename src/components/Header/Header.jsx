import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>
            <img
                src="logo192.png"
                alt="logo"/>
        </header>
    );
}

export default Header;