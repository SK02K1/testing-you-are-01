export const TodoCard = ({ todoData }) => {
  const { task, isCompleted } = todoData;
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
      <button>delete</button>
    </label>
  );
};
