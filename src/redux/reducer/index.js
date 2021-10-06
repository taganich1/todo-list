import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";
import { getTasksReducer } from "./getTasksReducer";
import { deleteTasksReducer } from "./deleteTaskReducer";
import { updateTasksReducer } from "./updateTaskReducer";
import { saveTaskReducer } from "./saveTaskReducer";

export const rootReducer = combineReducers({
  tasksReducer,
  getTasksReducer,
  deleteTasksReducer,
  updateTasksReducer,
  saveTaskReducer,
});
