import {
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "../actions/actions";

const initialState = {
  error: null,
};

export const updateTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASK_REQUEST: {
      return {
        ...state,
        completed: action.payload,
      };
    }
    case UPDATE_TASK_SUCCESS: {
      return {
        ...state,
        completed: action.payload,
      };
    }
    case UPDATE_TASK_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
