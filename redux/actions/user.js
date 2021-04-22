import { USER_REQUEST, USER_REQUEST_INTERVAL } from "./type";
export default {
  call: (api, doc, item, id, props) => ({
    type: USER_REQUEST,
    api,
    doc,
    item,
    id,
    props,
  }),
  interval: (api, doc, item, id, props) => ({
    type: USER_REQUEST_INTERVAL,
    api,
    doc,
    item,
    id,
    props,
  }),
};
