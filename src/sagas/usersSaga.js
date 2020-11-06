import { call } from 'redux-saga/effects'
import * as api from '../api/remoteApi'
import {fetchUsers} from '../store/users/UsersAction'
import {createRoutineSagaWatcher} from "./createRoutineSagaWatcher";


export default createRoutineSagaWatcher(fetchUsers, _ => call(api.fetchUsers));

