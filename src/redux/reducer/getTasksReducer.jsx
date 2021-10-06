import {
  GET_TASKS_FAILURE,
  GET_TASKS_SUCCESS,
} from "../actions/actions";

const initialState = {
  token: localStorage.getItem("token") || null,
  tasks: [],
  error: null,
  isLoading: true,
};

export const getTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_SUCCESS: {
      return { ...state, tasks: action.payload, isLoading: false };
    }
    case GET_TASKS_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
