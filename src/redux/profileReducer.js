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
        case ADD_POST: {
            let newState = {...state};
            newState.postsData = [...state.postsData];
            let newPost = {
                id: newState.postsData.length + 1,
                name: "Admin",
                message: newState.newPostText,
                likes: 0
            };
            newState.postsData.push(newPost);
            newState.newPostText = "";
            return newState;
        }
        case CHANGE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText};
        }
        case LIKE_POST: {
            let newState = {...state};
            let data = [...newState.postsData];
            console.log(newState);
            console.log(data);
            let likedPost = data.find(post => post.id === action.id);
            likedPost.likes++;
            return newState;
        }
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