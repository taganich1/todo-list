import { all, call, put, takeLatest } from "redux-saga/effects";
import { serverGetTasks } from "../api/tasksApi";
import {
  GET_TASKS_REQUEST,
  getTaskFailureAction,
  getTaskSuccessAction,
} from "../actions/actions";

function* getTasks(payload) {
  try {
    const tasks = yield call(serverGetTasks, payload);
    yield put(getTaskSuccessAction(tasks));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put(getTaskFailureAction(message));
  }
}

export function* getTasksWatcher() {
  yield takeLatest(GET_TASKS_REQUEST, getTasks);
}

export default function* getTasksSaga() {
  yield all([getTasksWatcher()]);
}
