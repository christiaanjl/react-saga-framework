import { combineReducers } from "redux";
import UsersReducer from "./users/UsersReducer";
import TodosReducer from "./todos/TodosReducer";

export default combineReducers({
  users: UsersReducer,
  todos: TodosReducer,
});
