import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions";

function Todo({ id, todo, completed }) {
  const dispatch = useDispatch();
  return (
    <li
      id={id}
      onClick={() => dispatch(toggleTodo(id))}
      className={completed ? "completed" : null}
    >
      <p>{todo}</p>
    </li>
  );
}
export default Todo;
