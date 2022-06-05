import "./styles.css";
import { useReducer } from "react";
import { MainHeader } from "./components";
import { todosInitialState, todosReducer } from "./reducers";

export default function App() {
  const [todosState, dispatchTodos] = useReducer(
    todosReducer,
    todosInitialState
  );
  return (
    <div className="App">
      <MainHeader>todo-with-jest</MainHeader>
    </div>
  );
}
