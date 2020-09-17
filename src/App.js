import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, logIn } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
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
      <form>
        <h4>Add Todo</h4>
        <input type="text" id="todo" name="todo" />
        <button type="button">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
