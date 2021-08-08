import andreyAvatar from "../avatars/avatar1.jpg";
import artemAvatar from "../avatars/avatar2.jpg";
import alexeyAvatar from "../avatars/avatar3.jpg";
import antonAvatar from "../avatars/avatar4.jpg";

const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogsData: [
        {id: 1, name: "Andrey", avatar: andreyAvatar},
        {id: 2, name: "Artem", avatar: artemAvatar},
        {id: 3, name: "Alexey", avatar: alexeyAvatar},
        {id: 4, name: "Anton", avatar: antonAvatar}
    ],
    messagesData: [
        {id: 1, message: "Array"},
        {id: 2, message: "of"},
        {id: 3, message: "JavaScript"},
        {id: 4, message: "Objects"},
    ],
    newMessageText: ""
}

export const dialogsReducer = (state = initialState, action) => {
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