import * as ActionTypes from "../ActionTypes";

export default (searchID = null, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_ID:
      return action.payload;
  }
  return searchID;
};
