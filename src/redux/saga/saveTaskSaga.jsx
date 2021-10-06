import { serverSaveTask } from "../api/tasksApi";
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { SAVE_TASK_FAILURE, SAVE_TASK_REQUEST, saveTaskSuccessAction } from '../actions/actions';

function* saveTask({ payload }) {
  try {
    const task = yield call(serverSaveTask, payload);
    yield put(saveTaskSuccessAction({ task }));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put({ type: SAVE_TASK_FAILURE, payload: message });
  }
}

export function* saveTaskWatcher() {
  yield takeLatest(SAVE_TASK_REQUEST, saveTask);
}

export default function* saveTaskSaga() {
  yield all([saveTaskWatcher()]);
}
