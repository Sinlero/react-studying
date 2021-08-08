const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMsg = {
                id: 5,
                message: state.newMessageText
            };
            state.messagesData.push(newMsg);
            state.newMessageText = "";
            return state;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const changeNewMessageTextActionCreator = (text) => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;