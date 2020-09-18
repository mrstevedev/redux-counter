import { v4 } from "node-uuid";
import {
  INCREMENT,
  DECREMENT,
  SIGN_IN,
  ADD_TODO,
  TOGGLE_TODO,
} from "../constants/actionTypes";

// ACTIONS
export const increment = (n) => {
  return {
    type: INCREMENT,
    payload: n,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const logIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const addTodo = (text) => ({
  id: v4(),
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
