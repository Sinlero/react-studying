const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
const LIKE_POST = "LIKE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postsData: [
        {id: 1, message: "Hello React", name: "Andrey", likes: 5},
        {id: 2, message: "Studying props", name: "Andrey", likes: 59},
        {id: 3, message: "Nice!!! All works", name: "Andrey", likes: 233}
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                postsData: [...state.postsData,
                    {
                        id: [...state.postsData].length + 1,
                        name: "Admin",
                        message: {...state}.newPostText,
                        likes: 0
                    }],
                newPostText: ""
            }
        }
        case CHANGE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case LIKE_POST: {
            return {
                ...state,
                postsData: [...state.postsData].map(post => {
                    if (post.id === action.id) {
                        return {...post, likes: ++post.likes};
                    }
                    return post;
                })
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const changeNewPostText = (text) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: text
    }
}

export const likePost = (id) => {
    return {
        type: LIKE_POST,
        id: id
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export default profileReducer;