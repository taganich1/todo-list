import { SAVE_TASK_REQUEST, SAVE_TASK_SUCCESS } from "../actions/actions";

const initialState = {
  error: null,
};

export const saveTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TASK_REQUEST: {
      return {
        ...state,
        task: action.payload,
      };
    }
    case SAVE_TASK_SUCCESS: {
      return {
        ...state,
        task: action.payload,
      };
    }
    default:
      return state;
  }
};
