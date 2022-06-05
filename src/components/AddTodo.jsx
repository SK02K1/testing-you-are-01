import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TODOS_ACTIONS } from "../constants";

export const AddTodo = ({ dispatchTodos }) => {
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const todo = { id: uuid(), task, isCompleted: false };
    dispatchTodos({ type: TODOS_ACTIONS.ADD_TODO, payload: { todo } });
    setTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        type="text"
        name="task"
        id="task"
        placeholder="Add new task"
        required
      />
      <button>Add</button>
    </form>
  );
};
