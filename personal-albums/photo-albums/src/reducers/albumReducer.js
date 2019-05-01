import {GET_ALBUMS, GET_PHOTOS} from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_ALBUMS:
            return {...state, albums: action.payload};
        case GET_PHOTOS:
            return {...state, photos: action.payload};
        default:
            return state
    }
}
