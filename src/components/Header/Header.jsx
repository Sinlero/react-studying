import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>
            <img
                src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"
                alt="logo"/>
        </header>
    );
}

export default Header;