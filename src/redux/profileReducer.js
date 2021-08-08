const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";

let initialState = {
        postsData: [
            {id: 1, message: "Hello React", name: "Andrey", likes: 5},
            {id: 2, message: "Studying props", name: "Andrey", likes: 59},
            {id: 3, message: "Nice!!! All works", name: "Andrey", likes: 233}
        ],
        newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                name: "Admin",
                message: state.newPostText,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

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

export default profileReducer;