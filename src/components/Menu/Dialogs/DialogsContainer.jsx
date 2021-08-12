import Dialogs from "./Dialogs";
import {changeNewMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>),
        messagesElements: state.dialogsPage.messagesData.map(message => <Message key={message.id} message={message.message}/>),
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        changeMessageText: (text) => {
            dispatch(changeNewMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;