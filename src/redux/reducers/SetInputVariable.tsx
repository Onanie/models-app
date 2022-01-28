import * as ActionTypes from "../ActionTypes";

export default (setInputVariable = null, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_INPUT_VARIABLE:
      return action.payload;
  }
  return setInputVariable;
};
