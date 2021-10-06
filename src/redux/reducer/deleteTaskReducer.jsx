import {
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
} from "../actions/actions";

const initialState = {
  error: null,
};

export const deleteTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK_REQUEST: {
      return {
        ...state,
        id: action.payload,
      };
    }
    case DELETE_TASK_SUCCESS: {
      return { ...state, id: action.payload };
    }
    case DELETE_TASK_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
