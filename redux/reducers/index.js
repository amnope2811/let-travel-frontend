import { combineReducers } from "redux";
import component from "./component";
import interact from "./interact";
import example from './example';
import api from './api';
const reducers = combineReducers({
  component,
  interact,
  example,
  api
});

export default reducers;
