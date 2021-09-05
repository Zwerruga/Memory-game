export const recordActionsConstants = {
  ADD_NEW_RECORD: "ADD_NEW_RECORD"
};

export const addNewRecord = (score) => {
  return {
    type: recordActionsConstants.ADD_NEW_RECORD,
    payload: score
  };
};
