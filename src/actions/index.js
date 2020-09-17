// ACTIONs
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

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: text
  };
};