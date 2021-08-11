import style from "./Dialogs.module.css"
import MessageBox from "./MessageBox/MessageBox";

function Dialogs(props) {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogsElements}
            </div>
            <div className={style.messages}>
                {props.messagesElements}
                <MessageBox sendMessage={props.sendMessage} changeMessageText={props.changeMessageText}
                            defaultText={props.newMessageText}/>
            </div>
        </div>
    );
}

export default Dialogs;