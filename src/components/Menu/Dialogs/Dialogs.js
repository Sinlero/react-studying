import style from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import MessageBox from "./MessageBox/MessageBox";

function Dialogs(props) {

    let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>)
    let messagesElements = props.state.messagesData.map( message => <Message message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <MessageBox  dispatch={props.dispatch} defaultText={props.state.newMessageText}/>
            </div>
        </div>
    );
}

export default Dialogs;