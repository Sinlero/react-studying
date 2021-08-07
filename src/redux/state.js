import andreyAvatar from "../avatars/avatar1.jpg"
import artemAvatar from "../avatars/avatar2.jpg"
import alexeyAvatar from "../avatars/avatar3.jpg"
import antonAvatar from "../avatars/avatar4.jpg"

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
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    changeNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    sendMessage() {
        debugger;
        let newMsg = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messagesData.push(newMsg);
    },
    changeNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;