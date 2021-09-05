export const recordActionsConstants = {
  ADD_NEW_RECORD: "ADD_NEW_RECORD"
};

export const addNewRecord = (name, score) => {
  return {
    type: recordActionsConstants.ADD_NEW_RECORD,
    payload: {
      name,
      score
    }
  };
};
