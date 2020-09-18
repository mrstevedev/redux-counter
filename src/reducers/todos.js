import { ADD_TODO, TOGGLE_TODO } from '../constants/actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
            id: action.id,
            todo: action.payload,
            completed: false
        }        
      ];
    case TOGGLE_TODO:
        return state.map(todo => 
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo 
        )        
    default:
      return state;
  }
};
export default todos;
