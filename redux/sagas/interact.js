import { INTERACT_REQUEST, INTERACT, COMPONENT } from "../actions/type";
import { put, fork, call, take, takeEvery, throttle } from "redux-saga/effects";
import _ from "./super";
const { useInternalSaga ,error} = _;
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
  const { doc, service } = actions;
  try {
    switch (actions.doc) {
      default:
        return yield call(useInternalSaga, { api: "CLEAR", doc, service });
    }
  } catch (e) {
    console.log(e);
    return yield call(error, e);
  }
}
function* get(actions) {
  const { doc, item, id, props, service } = actions;
  try {
    console.log(actions);
    switch (actions.doc) {
      case 'REMEMBER':
        let remember =JSON.parse(localStorage.getItem("r"));
        if(remember){
          remember = JSON.parse(window.atob(remember));
          remember.username = window.atob(remember.username);
          remember.password = window.atob(remember.password);
        }
        return yield call(useInternalSaga, {api: "GET",doc,"item":remember,id,props,service});
      default:
        return yield call(useInternalSaga, {
          api: "GET",
          doc,
          item,
          id,
          props,
          service,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(error, e);
  }
}
function* post(actions) {
  const { doc, item, props, service } = actions;
  try {
    switch (actions.doc) {
      case 'SIGNOUT':
        localStorage.removeItem("token");
        localStorage.removeItem("u");
        yield call(clear, {doc,item,props,service});
        location.reload();
        return ;
      default:
        return yield call(useInternalSaga, {
          api: "POST",
          doc,
          item,
          props,
          service,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(error, e);
  }
}
function* change(actions) {
  const { doc, item, props, id, service } = actions;
  try {
    switch (actions.doc) {
      case 'REMEMBER':
        let user = Object.assign({}, item);;
        user.username = window.btoa(user.username);
        user.password = window.btoa(user.password);
        user = window.btoa(JSON.stringify(user));
        localStorage.setItem("r", JSON.stringify(user));
      default:
        return yield call(useInternalSaga, {
          api: "PUT",
          doc,
          item,
          props,
          id,
          service,
        });
    }
  } catch (e) {
    return yield call(error, e);
  }
}
function* del(actions) {
  const { doc, id, service } = actions;
  try {
    switch (actions.doc) {
      case 'REMEMBER':
        localStorage.removeItem("r");
      default:
        return yield call(useInternalSaga, { api: "DEL", doc, id, service });
    }
  } catch (e) {
    return yield call(error, e);
  }
}
function* list(actions) {
  const { doc, item, props, service } = actions;
  try {
    switch (actions.doc) {
      default:
        return yield call(useInternalSaga, {
          api: "LIST",
          doc,
          props,
          item,
          service,
        });
    }
  } catch (e) {
    return yield call(error, e);
  }
}

export function* interact() {
  yield takeEvery(INTERACT_REQUEST, request);
}
