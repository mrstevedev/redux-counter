import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  return (
    <Fragment>
      <form>
        <h4>Add Todo</h4>
        <input
          type="text"
          id="todo"
          name="todo"
          onChange={(event) => setVal(event.target.value)}
        />
        <button type="button" onClick={() => val ? dispatch(addTodo(val)) : null} 
            style={{ background: '#9E9E9E', color:' rgb(0 0 0)', fontWeight: 'bold' }}>
          Add Todo
        </button>
      </form>
    </Fragment>
  );
};
export default AddTodo;
