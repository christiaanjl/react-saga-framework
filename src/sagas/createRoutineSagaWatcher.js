import { put, takeLatest } from 'redux-saga/effects'

/**
 * Returns a 'takeLatest' TRIGGER watcher for the provided Saga Routine.
 * Will call one or more of the 5 default routine actions depending
 * on the result of reduxEffect function.
 *
 * @param routine Saga routine
 * @param reduxEffect Function that takes a redux action and returns a Saga effect.
 *                      e.g. (action) => call(api.fetchX, action.payload)
 *                      note api.fetchX must return a response compatible with the axios format.
 * @returns {routineSagaWatcher} Routine TRIGGER event listener.
 */
export function createRoutineSagaWatcher(routine, reduxEffect) {
    function* routineSaga(action) {
        yield put(routine.request());

        try {
            const response = yield reduxEffect(action);

            if(response.status === 200) {
                yield put(routine.success(response.data));
            } else {
                yield put(routine.failure(response.statusText));
            }
        } catch (e) {
            yield put(routine.failure(e.message));
        } finally {
            yield put(routine.fulfill());
        }
    }


    function* routineSagaWatcher() {
        yield takeLatest(routine.TRIGGER, routineSaga);
    }

    return routineSagaWatcher;
}

