import andreyAvatar from "../avatars/avatar1.jpg"
import artemAvatar from "../avatars/avatar2.jpg"
import alexeyAvatar from "../avatars/avatar3.jpg"
import antonAvatar from "../avatars/avatar4.jpg"

let rerenderEntireTree = () => {
    console.log("state was changed");
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const changeNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const sendMessage = () => {
    let newMsg = {
        id: 5,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messagesData.push(newMsg);
}

export const changeNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;