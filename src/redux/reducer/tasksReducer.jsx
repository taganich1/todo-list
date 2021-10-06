import { ADD_TASK, TASK_FAILURE } from "../actions/actions";

const initialState = {
  token: localStorage.getItem("token") || null,
  error: null,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        task: action.payload,
      };
    }
    case TASK_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
