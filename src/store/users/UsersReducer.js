import Status from "../../constants/Status";
import {fetchUsers} from "./UsersAction";
import {keyBy} from "lodash";
import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
    data: {},
    status: Status.INIT
};


export default handleActions(
    {
        [fetchUsers.REQUEST]: () => {
            return {...INITIAL_STATE, status: Status.BUSY};
        },
        [fetchUsers.SUCCESS]: (state, action) => {
            return {...state, status: Status.SUCCESS, data: keyBy(action.payload, 'id')};
        },
        [fetchUsers.FAILED]: (state) => {
            return {...state, status: Status.FAILED};
        },
        [fetchUsers.FULFILL]: (state) => {
            return {...state, status: Status.INIT};
        },
    },
    INITIAL_STATE
);
