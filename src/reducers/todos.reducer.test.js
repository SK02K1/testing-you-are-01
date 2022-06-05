import { TODOS_ACTIONS } from "../constants";
import { todosReducer } from "./todos.reducer";

describe("testing todos reducer", () => {
  // ADD_TODO
  test("should add to todos when a todo is added", () => {
    const todosInitialState = {
      todos: []
    };

    const todo = { id: 123, task: "testing you are", isCompleted: false };

    const action = {
      type: TODOS_ACTIONS.ADD_TODO,
      payload: { todo }
    };

    const expectedState = {
      todos: [todo]
    };

    const reducedState = todosReducer(todosInitialState, action);

    expect(reducedState).toEqual(expectedState);
  });

  // DELETE_TODO
  test("should delete from todos", () => {
    const todosInitialState = {
      todos: [{ id: 123, task: "testing you are", isCompleted: false }]
    };
    const action = {
      type: TODOS_ACTIONS.DELETE_TODO,
      payload: { todoId: 123 }
    };
    const expectedState = { todos: [] };
    const reducedState = todosReducer(todosInitialState, action);

    expect(reducedState).toEqual(expectedState);
  });

  // TOGGLE_TODO_COMPLETED_STATE
  test("should toggle todo isCompleted state", () => {
    const todosInitialState = {
      todos: [{ id: 123, task: "testing you are", isCompleted: false }]
    };

    const action = {
      type: TODOS_ACTIONS.TOGGLE_TODO_COMPLETED_STATE,
      payload: { todoId: 123 }
    };

    const expectedState = {
      todos: [{ id: 123, task: "testing you are", isCompleted: true }]
    };

    const reducedState = todosReducer(todosInitialState, action);

    expect(reducedState).toEqual(expectedState);
  });
});
