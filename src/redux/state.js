import andreyAvatar from "../avatars/avatar1.jpg"
import artemAvatar from "../avatars/avatar2.jpg"
import alexeyAvatar from "../avatars/avatar3.jpg"
import antonAvatar from "../avatars/avatar4.jpg"

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hello React", name: "Andrey", likes: 5},
                {id: 2, message: "Studying props", name: "Andrey", likes: 59},
                {id: 3, message: "Nice!!! All works", name: "Andrey", likes: 233}
            ],
            newPostText: ""
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state was changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    name: "Admin",
                    message: this._state.profilePage.newPostText,
                    likes: 0
                };
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
                break;
            case CHANGE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case SEND_MESSAGE:
                let newMsg = {
                    id: 5,
                    message: this._state.dialogsPage.newMessageText
                };
                this._state.dialogsPage.messagesData.push(newMsg);
                this._state.dialogsPage.newMessageText = "";
                this._callSubscriber(this._state);
                break;
            case CHANGE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;
            default:
                console.log("No such action");
        }
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const changeNewPostTextActionCreator = (text) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: text
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

export default store;
window.store = store;