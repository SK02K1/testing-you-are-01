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
});
