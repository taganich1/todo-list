export const ADD_TASK = "ADD_TASK";
export const TASK_FAILURE = "TASK_FAILURE";

export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

export const UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE";

export const GET_TASKS_REQUEST = "GET_TASKS_REQUEST";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAILURE = "GET_TASKS_FAILURE";

export const SAVE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const SAVE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const SAVE_TASK_FAILURE = "SAVE_TASK_FAILURE";

/*todo: 
   ADD_TASK*/

export const addTaskAction = (payload) => ({
  type: ADD_TASK,
  payload,
});

/*todo: 
   UPDATE_TASK*/

export const updateTaskRequestAction = (payload) => ({
  type: UPDATE_TASK_REQUEST,
  payload,
});

export const updateTaskSuccessAction = (payload) => ({
  type: UPDATE_TASK_SUCCESS,
  payload,
});

export const updateTaskFailureAction = (payload) => ({
  type: UPDATE_TASK_REQUEST,
  payload,
});

/*todo: 
   SAVE_TASK*/

export const saveTaskRequestAction = (payload) => ({
  type: SAVE_TASK_REQUEST,
  payload,
});

export const saveTaskSuccessAction = (payload) => ({
  type: SAVE_TASK_SUCCESS,
  payload,
});

export const saveTaskFailureAction = (payload) => ({
  type: SAVE_TASK_FAILURE,
  payload,
});

/*todo: 
   DELETE_TASK*/

export const deleteTaskRequestAction = (payload) => ({
  type: DELETE_TASK_REQUEST,
  payload,
});

export const deleteTaskSuccessAction = (payload) => ({
  type: DELETE_TASK_SUCCESS,
  payload,
});

export const deleteTaskFailureAction = (payload) => ({
  type: DELETE_TASK_FAILURE,
  payload,
});

/*todo: 
   GET_TASK*/

export const getTaskRequestAction = (payload) => ({
  type: GET_TASKS_REQUEST,
  payload,
});

export const getTaskSuccessAction = (payload) => ({
  type: GET_TASKS_SUCCESS,
  payload,
});

export const getTaskFailureAction = (payload) => ({
  type: GET_TASKS_FAILURE,
  payload,
});
