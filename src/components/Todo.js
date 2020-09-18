import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions";

function Todo({ id, todo }) {
    const dispatch = useDispatch();
  return (
    <li id={id} onClick={() => dispatch(toggleTodo(id))}>
      <p>{todo}</p>
    </li>
  );
}
export default Todo;
