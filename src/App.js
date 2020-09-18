import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, logIn } from "./actions";
import TodoList from './components/TodoList';
import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h4>Redux Tutorial</h4>
      <p>counter {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <div style={ { 'margin' : '2rem' } }>
        <button onClick={() => dispatch(logIn())}>Sign in</button>
      </div>
      {isLogged ? <p>Logged in info here</p> : ""}
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
