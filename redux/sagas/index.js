import { all } from "redux-saga/effects";
import { interact } from "./interact";
import {example} from './example';
import {api} from './api';
export default function* saga() {
  yield all([interact(),example(),api()]);
}
