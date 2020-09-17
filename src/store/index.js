import { createStore } from "redux";
import allReducers from "../reducers";

const persistedState = {
    todos: [{
        id: 0,
        todo: 'Learn Redux',
        completed: false
    }]
}

const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())

export default store;
