import { v4 } from "uuid";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
            id: action.id,
            todo: action.payload,
            completed: false
        }        
      ];
    case "TOGGLE_TODO":
        return [
            ...state
        ]
    default:
      return state;
  }
};
export default todos;
