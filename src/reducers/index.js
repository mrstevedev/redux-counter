// Import all reducers
import counterReducer from './counter';
import loggedReducer from './isLogged';
import todos from './todos';
import { combineReducers } from 'redux'; 

const allReducers = combineReducers({
    todos: todos,
    counter: counterReducer,
    isLogged: loggedReducer,
});

export default allReducers;