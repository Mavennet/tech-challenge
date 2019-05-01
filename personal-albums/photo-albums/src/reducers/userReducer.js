import {USER_LOGIN, USER_LOGOUT, AUTH_USER} from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                currentUser: action.payload.currentUser
            };
        case AUTH_USER:
            return {
                ...state,
                currentUser: action.payload.currentUser
            };
        case USER_LOGOUT:
            return {...state};
        default:
            return state
    }
}