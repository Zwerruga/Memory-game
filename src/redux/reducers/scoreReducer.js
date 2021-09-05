import { scoreActionsConstants } from "../actions/scoreActions.js";

const initialState = 36000;

export const scoreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case scoreActionsConstants.SET_SCORE:
      if (!payload) return initialState;

      const score = initialState - payload * 10;
      return score > 0 ? score : 1;
    default:
      return state;
  }
};
