import { TODOS_ACTIONS } from "../constants";

export const TodoCard = ({ todoData, dispatchTodos }) => {
  const { id, task, isCompleted } = todoData;

  const deleteBtnHandler = () => {
    dispatchTodos({
      type: TODOS_ACTIONS.DELETE_TODO,
      payload: { todoId: id }
    });
  };

  return (
    <label
      style={{
        textAlign: "left",
        padding: "0",
        margin: ".5rem 0",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <span>
        <input type="checkbox" name="task" id="task" />
        <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
          {task}
        </span>
      </span>
      <button onClick={deleteBtnHandler}>delete</button>
    </label>
  );
};
