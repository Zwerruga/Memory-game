export const scoreActionsConstants = {
  SET_SCORE: "SET_SCORE"
};
export const setScore = (seconds) => {
  return {
    type: scoreActionsConstants.SET_SCORE,
    payload: seconds
  };
};
