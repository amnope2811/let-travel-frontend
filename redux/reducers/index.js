import { combineReducers } from "redux";
import component from "./component";
import lotto from "./lotto";
import user from "./user";
const reducers = combineReducers({
  component,
  lotto,
  user,
});

export default reducers;
