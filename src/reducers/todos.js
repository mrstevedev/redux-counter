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
        if(action.payload) {
            console.log(action.payload)
        }
        return [
            // ...state, { id: action.id, completed: true }
            ...state
        ]
    default:
      return state;
  }
};
export default todos;
