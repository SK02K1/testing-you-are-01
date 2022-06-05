import { TODOS_ACTIONS } from "../constants";

export const todosInitialState = {
  todos: []
};

export const todosReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TODOS_ACTIONS.ADD_TODO:
      return { ...state, todos: state.todos.concat(payload.todo) };
    case TODOS_ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== payload.todoId)
      };
    case TODOS_ACTIONS.TOGGLE_TODO_COMPLETED_STATE:
      return {
        ...state,
        todos: state.todos.map((todoData) =>
          todoData.id === payload.todoId
            ? { ...todoData, isCompleted: !todoData.isCompleted }
            : todoData
        )
      };
    default:
      return state;
  }
};
