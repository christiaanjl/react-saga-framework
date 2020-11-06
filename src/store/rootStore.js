import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import fetchUsersSagaWatcher from "../sagas/usersSaga";
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import fetchTodosSagaWatcher from "../sagas/todosSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, composeWithDevTools({})(
   applyMiddleware(sagaMiddleware)
));

const sagas = [
    fetchUsersSagaWatcher,
    fetchTodosSagaWatcher,
    routinePromiseWatcherSaga
];

sagas.forEach((saga) => sagaMiddleware.run(saga));
