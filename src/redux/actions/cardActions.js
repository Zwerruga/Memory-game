export const cardActionsConstants = {
  SET_NEW_DESK: "SET_NEW_DESK",
  SET_FIRST_FLIPPED: "SET_FIRST_FLIPPED",
  HIDE_FIRST_FLIPPED: "HIDE_FIRST_FLIPPED",
  SET_SECOND_FLIPPED: "SET_SECOND_FLIPPED",
  COMPARE_FLIPPED: "COMPARE_FLIPPED"
};

export const setNewDesk = () => {
  return { type: cardActionsConstants.SET_NEW_DESK };
};
export const setFirstFlipped = (index) => {
  return { type: cardActionsConstants.SET_FIRST_FLIPPED, payload: index };
};
export const hideFirstFlipped = () => {
  return { type: cardActionsConstants.HIDE_FIRST_FLIPPED };
};
export const setSecondFlipped = (index) => {
  return { type: cardActionsConstants.SET_SECOND_FLIPPED, payload: index };
};
export const compareFlipped = () => {
  return { type: cardActionsConstants.COMPARE_FLIPPED };
};
