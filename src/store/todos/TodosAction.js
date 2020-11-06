import { createRoutine, promisifyRoutine } from "redux-saga-routines";
import { createAction } from "redux-actions";

export const toggleCompleted = createAction("TOGGLE_COMPLETED");
export const fetchTodos = createRoutine("FETCH_TODOS");

export const fetchTodosAsync = promisifyRoutine(fetchTodos);
