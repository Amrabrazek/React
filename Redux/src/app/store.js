import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from '../features/user/userReducer'
import counterReducer from '../features/counter/counterReducer'
import postReducer from '../features/post/postReducer'

const rootReducer = combineReducers({
    user: userReducer,
    count: counterReducer,
    post: postReducer
    });
export default createStore(rootReducer, applyMiddleware(thunk))
