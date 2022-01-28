import * as actionTypes from "../ActionTypes";

export const setModel = (model: any) => {
  return {
    type: actionTypes.SELECT_Model,
    payload: model,
  };
};
export const setSearchID = (id: any) => {
  return {
    type: actionTypes.SET_SEARCH_ID,
    payload: id,
  };
};
export const setInputVariable = (variable: any) => {
  return {
    type: actionTypes.SET_INPUT_VARIABLE,
    payload: variable,
  };
};
