import { call, put, takeLatest, all } from "redux-saga/effects";
import { ADD_TASK, addTaskAction, TASK_FAILURE } from "../actions/actions";
import { serverAddTask } from "../api/tasksApi";

function* addTask({ payload }) {
  try {
    const task = yield call(serverAddTask, payload);
    yield put(addTaskAction);
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Something went wrong";
    }
    yield put({ type: TASK_FAILURE, payload: message });
  }
}

export function* addTaskWatcher() {
  yield takeLatest(ADD_TASK, addTask);
}

export default function* addTaskSaga() {
  yield all([addTaskWatcher()]);
}
