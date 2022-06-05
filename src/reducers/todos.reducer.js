import { TODOS_ACTIONS } from "../constants";

export const todosInitialState = {
  todos: []
};

export const todosReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TODOS_ACTIONS.ADD_TODO:
      return { ...state, todos: state.todos.concat(payload.todo) };
    default:
      return state;
  }
};
