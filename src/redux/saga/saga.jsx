import { all, fork } from "redux-saga/effects";
import addTaskSaga from "./tasksSaga";
import deleteTaskSaga from "./deleteTaskSaga";
import getTasksSaga from "./getTodosSaga";
import updateTaskSaga from "./updateTaskSaga";
import saveTaskSaga from "./saveTaskSaga";

export default function* rootSaga() {
  yield all([
    fork(addTaskSaga),
    fork(deleteTaskSaga),
    fork(getTasksSaga),
    fork(updateTaskSaga),
    fork(saveTaskSaga),
  ]);
}
