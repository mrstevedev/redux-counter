import React from "react";
import Todo from "./Todo";

function TodoList ({ todos }) {
  return (
    <React.Fragment>
      <h4>Todo Items</h4>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;
