import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import Dialogs from "./Dialogs";
import {changeNewMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer";

function DialogsContainer(props) {

    let state = props.store.getState();

    let dialogsElements = state.dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}
                                                                      avatar={dialog.avatar}/>)
    let messagesElements = state.dialogsPage.messagesData.map(message => <Message message={message.message}/>)

    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onChangeMessageText = (text) => {
        props.store.dispatch(changeNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs sendMessage={onSendMessage} changeMessageText={onChangeMessageText} dialogsElements={dialogsElements}
                 messagesElements={messagesElements} newMessageText={state.dialogsPage.newMessageText}/>
    );
}

export default DialogsContainer;