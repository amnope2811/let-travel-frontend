import types,{API} from "../actions/type";
import { put,fork, call, takeEvery } from "redux-saga/effects";
import _super from "./super";
import service from "../services";
import Router from "next/router";
function* request(actions) {
  try {
    switch (actions.api) {
      case "GET":
        return yield fork(get, actions);
      case "POST":
        return yield fork(post, actions);
      case "PUT":
        return yield fork(change, actions);
      case "PATCH":
        return yield fork(patch, actions);
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
  const { item, doc, id, props ,mcs} = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      case 'ME':
        try{
            let response = yield call(service.post, 'service/get-user', {username:window.atob(localStorage.getItem("u"))});
            yield put({
              type: API[mcs][doc]["GET"]["SUCCESS"],
              data: response.data,
            });
            if(response.data==null){
              Router.push('/login');
            }
            return yield call(_super.complete);
        }catch(e){
            Router.push('/login');
            return yield call(_super.complete);
        }
      default:
        return yield call(_super.get, {
          item,
          doc,
          id,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(_super.error, e);
  }
}
function* post(actions) {
  const { item, doc, id, props,mcs } = actions;
  const _loading = `loading_${doc.toLowerCase().replace(/-/g, "_")}`;
  try {
    yield call(_super.loading);
    console.log(actions.doc);
    switch (actions.doc) {
      case 'API-AUTH-SIGNIN':
        try{
            let response = yield call(service.post, 'api/auth/signin', item);
            let tkEncode = window.btoa(`${response.data?.type} ${response.data?.token}`);
            localStorage.setItem("token",tkEncode);
            localStorage.setItem("u",window.btoa(item.username));
            yield put({
              type: API[mcs][doc]["POST"]["SUCCESS"],
              data: response.data,
            });
            yield call(_super.complete, _loading);
            Router.push('/');
            return ;
        } catch (e) {
            console.log(e);
            yield call(_super.error, e.response?.data?.error ||e);
            return yield call(_super.complete);
        }
      case 'SIGNUP':
        try{
            console.log(item);
            let response = yield call(service.post, 'api/auth/signup', item);
            yield put({
              type: API[mcs][doc]["POST"]["SUCCESS"],
              data: response.data,
            });
            return yield call(_super.complete, _loading);
        } catch (e) {
            yield call(_super.error, e.response?.data?.message ||e);
            return yield call(_super.complete);
        }
      default:
        return yield call(_super.post, {
          item,
          doc,
          isback: props ? true : props?.isback,
          router:props?.router
        });
    }
  } catch (e) {
    return yield call(_super.error, e);
  }
}
function* change(actions) {
  const { item, id, doc, props } = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      default:
        return yield call(_super.update, {
          item,
          doc,
          id,
          props,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(_super.error, e);
  }
}
function* patch(actions) {
  const { item, id, doc, props } = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      default:
        return yield call(_super.patch, {
          item,
          doc,
          id,
          props,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(_super.error, e);
  }
}

function* del(actions) {
  const { id, doc, props } = actions;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      default:
        return yield call(_super.del, {
          doc,
          id,
          isback: props?.isback ? true : false,
        });
    }
  } catch (e) {
    return yield call(_super.error, e);
  }
}
function* list(actions) {
  const { item, doc, id, props,mcs } = actions;
  const _loading = `loading_${doc.toLowerCase().replace(/-/g, "_")}`;
  try {
    yield call(_super.loading);
    switch (actions.doc) {
      case 'PLACE':
        try{
          let response = yield call(service.post, 'service/search', item);
          
          console.log(response);
          yield put({
            type: API[mcs][doc]["LIST"]["SUCCESS"],
            data: response.data.places||[],
          });
          return yield call(_super.complete, _loading);
        }catch (e) {
          console.log(e.response);
          yield call(_super.error, e.response?.data?.error ||e);
          return yield call(_super.complete)
        }
      default:
        return yield call(_super.list, {
          item,
          doc,
          id,
        });
    }
  } catch (e) {
    console.log(e);
    return yield call(_super.error, e);
  }
}
export function* api() {
  const { API_REQUEST } = types;
  yield takeEvery(API_REQUEST, request);
}
