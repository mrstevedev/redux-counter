import { v4 } from 'node-uuid';

// ACTIONS
export const increment = (n) => {
  return {
    type: "INCREMENT",
    payload: n,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const logIn = () => {
  return {
    type: "SIGN_IN",
  };
};

let nextTodoId = 0;

export const addTodo = (text) => ({
  id: v4(),
  type: "ADD_TODO",
  payload: text
});


export const toggleTodo = (id) => {
  return {
    id: id,
    type: "TOGGLE_TODO"
  }
};
