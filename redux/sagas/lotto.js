import {
  LOTTERY_REQUEST,
  API,
  COMPONENT,
  INTERACT,
  LOTTERY_REQUEST_INTERVAL,
} from "../actions/type";
import {
  put,
  fork,
  call,
  take,
  takeEvery,
  debounce,
  throttle,
} from "redux-saga/effects";
import service from "../services";
import axios from "axios";
import _super from "./super";
function* request(actions) {
  try {
    switch (actions.api) {
      case "GET":
        return yield fork(get, actions);
      case "POST":
        return yield fork(post, actions);
      case "PUT":
        return yield fork(change, actions);
      case "DEL":
        return yield fork(del, actions);
      case "LIST":
        return yield fork(list, actions);
      case "CLEAR":
        return yield fork(clear, actions);
      default:
        return;
    }
  } catch (e) {
    console.log(e);
  }
}

function* clear(actions) {
  const { doc } = actions;
  yield call(_super.clear, {
    uri: doc.replace(/_/g, "-").toLowerCase(),
    doc,
  });
}
function* get(actions) {
  const { complete } = _super;
  const { item, doc, id, props } = actions;
  try {
    switch (actions.doc) {
      case "RESULT":
        return yield call(_super.get, {
          uri: `https://lotto.api.rayriffy.com/lotto`,
          doc,
          id,
        });
      default:
        return yield call(_super.get, {
          uri: doc.replace(/_/g, "-").toLowerCase(),
          doc,
          id,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(error, e);
  }
}
function* post(actions) {
  const { item, doc, id } = actions;
  try {
    yield call(loading);
    switch (actions.doc) {
      default:
        return yield call(_super.post, {
          uri: doc.replace(/_/g, "-").toLowerCase(),
          item,
          doc,
          isback: false,
        });
    }
  } catch (e) {
    return yield call(error, e);
  }
}
function* change(actions) {
  const { item, id, doc, props } = actions;
  try {
    yield call(loading);
    switch (actions.doc) {
      default:
        return yield call(_super.update, {
          uri: doc.replace(/_/g, "-").toLowerCase(),
          item,
          doc,
          id,
          props,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(error, e);
  }
}
function* del(actions) {
  const { id, doc } = actions;
  try {
    yield call(loading);
    switch (actions.doc) {
      default:
        return yield call(_super.del, {
          uri: doc.replace(/_/g, "-").toLowerCase(),
          doc,
          id,
          context: "-edit",
        });
    }
  } catch (e) {
    return yield call(error, e);
  }
}
function* list(actions) {
  const { item, doc, id, props } = actions;
  try {
    yield call(loading);
    switch (actions.doc) {
      case "RESULT":
        return yield call(_super.list, {
          uri: `https://lotto.api.rayriffy.com/list/1`,
          item,
          doc,
          id,
        });
      default:
        return yield call(_super.list, {
          uri: `${doc.replace(/_/g, "-").toLowerCase()}`,
          item,
          doc,
          id,
        });
    }
  } catch (e) {
    return yield call(error, e);
  }
}

function* success(data) {
  yield put({
    type: COMPONENT.SUCCESS,
    data: data,
  });
  yield put({
    type: COMPONENT.COMPLETE,
  });
}
function* error(error) {
  yield put({
    type: COMPONENT.FAIL,
    data: error,
  });
}
function* loading(component) {
  yield put({
    type: COMPONENT.LOADING,
    component,
  });
}
export function* lotto() {
  yield takeEvery(LOTTERY_REQUEST, request);
  yield debounce(300, LOTTERY_REQUEST_INTERVAL, request);
}
