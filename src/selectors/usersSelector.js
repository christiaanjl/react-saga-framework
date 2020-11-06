import { createSelector } from "reselect";
import { values } from "lodash";

const getUsers = (state) => state.users.data;

export const usersSelector = createSelector([getUsers], (users) =>
  values(users)
);
