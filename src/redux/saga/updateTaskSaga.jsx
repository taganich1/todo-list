import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  updateTaskSuccessAction,
} from "../actions/actions";
import { serverUpdateTask } from "../api/tasksApi";

function* updateTask({ payload }) {
  try {
    const completed = yield call(serverUpdateTask, payload);
    yield put(updateTaskSuccessAction({ completed }));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put({ type: UPDATE_TASK_FAILURE, payload: message });
  }
}

export function* updateTaskWatcher() {
  yield takeLatest(UPDATE_TASK_REQUEST, updateTask);
}

export default function* updateTaskSaga() {
  yield all([updateTaskWatcher()]);
}
