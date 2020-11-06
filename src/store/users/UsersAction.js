import { createRoutine, promisifyRoutine } from "redux-saga-routines";

export const fetchUsers = createRoutine("FETCH_USERS");
export const fetchUsersAsync = promisifyRoutine(fetchUsers);
