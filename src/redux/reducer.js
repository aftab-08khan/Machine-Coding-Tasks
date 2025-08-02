import { DECEREMENT, INCEREMENT } from "./action";

let initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  if (action.type === INCEREMENT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === DECEREMENT) {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  return state;
};
