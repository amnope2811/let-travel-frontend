import { all } from "redux-saga/effects";
import { interact } from "./interact";
import { lotto } from "./lotto";
import { user } from "./user";
export default function* saga() {
  yield all([interact(), lotto(),user()]);
}
