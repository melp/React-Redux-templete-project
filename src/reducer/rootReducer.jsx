import { combineReducers } from 'redux';

import User from './userReducer';
import Main from './mainReducer';


const rootReducer = combineReducers({
    User, Main
});

export default rootReducer