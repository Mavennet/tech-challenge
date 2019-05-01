import { combineReducers } from 'redux';
import user from './userReducer';
import album from './albumReducer';

const rootReducer = combineReducers({
    user,
    album
});

export default rootReducer;