import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions";
import ProptTypes from 'prop-types';

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

Todo.proptTypes = {
    id: ProptTypes.number.isRequired,
    completed: ProptTypes.bool.isRequired,
    todo: ProptTypes.string.isRequired
}

export default Todo;
