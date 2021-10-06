import { call, put, takeLatest, all } from "redux-saga/effects";
import { serverDeleteTask } from "../api/tasksApi";
import {
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  deleteTaskSuccessAction,
} from "../actions/actions";

function* deleteTask({ payload }) {
  try {
    const { id } = yield call(serverDeleteTask, payload);
    yield put(deleteTaskSuccessAction(id));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put({ type: DELETE_TASK_FAILURE, payload: message });
  }
}

export function* deleteTaskWatcher() {
  yield takeLatest(DELETE_TASK_REQUEST, deleteTask);
}

export default function* deleteTaskSaga() {
  yield all([deleteTaskWatcher()]);
}
