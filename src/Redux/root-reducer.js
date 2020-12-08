//這個root-reducer是所有reducer的總和
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user:userReducer
})