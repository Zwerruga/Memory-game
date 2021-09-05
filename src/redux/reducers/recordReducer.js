import { recordActionsConstants } from "../actions/recordActions.js";

const initialState = JSON.parse(localStorage.getItem("records")) || [];

export const recordReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case recordActionsConstants.ADD_NEW_RECORD:
      return [...state, payload];
    default:
      return state;
  }
};
