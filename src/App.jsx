import "./styles.css";
import { useReducer } from "react";
import { MainHeader, AddTodo, TodoCard } from "./components";
import { todosInitialState, todosReducer } from "./reducers";

export default function App() {
  const [todosState, dispatchTodos] = useReducer(
    todosReducer,
    todosInitialState
  );

  const { todos } = todosState;

  const todosListing = todos.map((todoData) => (
    <TodoCard key={todoData.id} todoData={todoData} />
  ));

  return (
    <div className="App">
      <MainHeader>todo-with-jest</MainHeader>
      <AddTodo dispatchTodos={dispatchTodos} />
      {todos.length ? todosListing : <p>no todo found</p>}
    </div>
  );
}
