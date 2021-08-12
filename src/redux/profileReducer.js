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
        // NOT WORK
        // case LIKE_POST: {
        //     let newState = [...state.postsData];
        //     let likedPost = newState.find(post => post.id === action.id);
        //     likedPost.likes++;
        //     return newState;
        // }
        case LIKE_POST: {
            debugger;
            return {
                ...state,
                postsData: state.postsData.map(post => {
                    if (post.id === action.id) {
                        return {...post, likes: ++post.likes};
                    }
                    return post;
                })
            }
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