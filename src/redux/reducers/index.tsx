import { combineReducers } from "redux";
import modelReducer from "./SelectModelReducer";
import searchIdReducer from "./SearchModelReducer";
import SetInputVariable from "./SetInputVariable";

export default combineReducers({
  selectedModel: modelReducer,
  searchId: searchIdReducer,
  variable: SetInputVariable,
});
