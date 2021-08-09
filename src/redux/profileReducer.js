const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
const LIKE_POST = "LIKE_POST";

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
                id: 4,
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
        case LIKE_POST:
            debugger;
            let likedPost = state.postsData.find(post => post.id === action.id);
            likedPost.likes++;
            state.postsData.splice(action.id - 1, 1);
            state.postsData.push(likedPost);
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

export const likePostActionCreator = (id) => {
    return {
        type: LIKE_POST,
        id: id
    }
}

export default profileReducer;