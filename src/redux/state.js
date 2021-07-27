import andreyAvatar from "../avatars/avatar1.jpg"
import artemAvatar from "../avatars/avatar2.jpg"
import alexeyAvatar from "../avatars/avatar3.jpg"
import antonAvatar from "../avatars/avatar4.jpg"

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hello React", name: "Andrey", likes: 5},
            {id: 2, message: "Studying props", name: "Andrey", likes: 59},
            {id: 3, message: "Nice!!! All works", name: "Andrey", likes: 233}
        ]
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
        ]
    }
}

export default state;