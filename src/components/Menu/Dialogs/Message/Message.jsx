import style from "./Message.module.css"

function Message(props) {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

export default Message;