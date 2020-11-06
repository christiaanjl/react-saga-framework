import { fetchTodos, toggleCompleted } from "./TodosAction";
import { keyBy } from "lodash";
import { handleActions } from "redux-actions";
import Status from "../../constants/Status";
import { merge } from "lodash";

const INITIAL_STATE = {
  data: {},
  status: Status.INIT,
};

export default handleActions(
  {
    [fetchTodos.REQUEST]: () => {
      return { ...INITIAL_STATE, status: Status.BUSY };
    },
    [fetchTodos.SUCCESS]: (state, action) => {
      return {
        ...state,
        status: Status.SUCCESS,
        data: keyBy(action.payload, "id"),
      };
    },
    [fetchTodos.FAILED]: (state) => {
      return { ...state, status: Status.FAILED };
    },
    [toggleCompleted]: (state, { payload: { id, completed } }) => {
      return merge({}, state, {
        data: {
          [id]: { completed },
        },
      });
    },
  },
  INITIAL_STATE
);
