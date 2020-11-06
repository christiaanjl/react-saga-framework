import { createSelector } from "reselect";
import { values } from "lodash";

const getTodos = (state) => state.todos.data;

export const todosSelector = createSelector([getTodos], (todos) =>
  values(todos)
);
