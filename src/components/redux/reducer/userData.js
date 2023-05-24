// import { SET_POST_DATA } from "../constant";

// const initialState = {
//     postData: [],
// commentData:[],
// userData:[],
// todoData:[]
// }

// export default function getUserDataReducer(state = initialState, action) {

//     switch (action.type) {
//         case SET_POST_DATA:
//             console.log(action, "reducer")
//             return {
//                 ...state,
//                 postData: action
//             }

//             break;

//         default:
//             break;
//     }
// }

import { SET_COMMENT_DATA, SET_POST_DATA, SET_TODO_DATA, SET_USER_DATA } from "../constant";

const initialState = {
    postData: [],
    commentData: [],
    userData: [],
    todoData: []
};

const getUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_DATA:
            console.log(action.data, "reducer data POST");
            return {
                ...state,
                postData: action.data,
            };
            break;
        case SET_COMMENT_DATA:
            console.log(action.data, "reducer data COMMENT");
            return {
                ...state,
                commentData: action.data,
            };
            break;
        case SET_TODO_DATA:
            console.log(action, "reducer data TODO");
            return {
                ...state,
                todoData: action.data,
            };
            break;
        case SET_USER_DATA:
            console.log(action.data, "reducer data USER");
            return {
                ...state,
                userData: action.data,
            };
            break;
        default:
            return state;
    }
};

export default getUserDataReducer;
