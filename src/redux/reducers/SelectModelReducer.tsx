import * as ActionTypes from "../ActionTypes";

export default (selectedModel = null, action: any) => {
  switch (action.type) {
    case ActionTypes.SELECT_Model:
      return action.payload;
  }
  return selectedModel;
};
