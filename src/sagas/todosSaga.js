import { call } from 'redux-saga/effects'
import * as api from '../api/remoteApi'
import {fetchTodos} from '../store/todos/TodosAction'
import {createRoutineSagaWatcher} from "./createRoutineSagaWatcher";


export default createRoutineSagaWatcher(fetchTodos, action => call(api.fetchTodos, action.payload));

