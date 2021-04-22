import { LOTTERY_REQUEST, LOTTERY_REQUEST_INTERVAL } from "./type";
export default {
  call: (api, doc, item, id, props) => ({
    type: LOTTERY_REQUEST,
    api,
    doc,
    item,
    id,
    props,
  }),
  interval: (api, doc, item, id, props) => ({
    type: LOTTERY_REQUEST_INTERVAL,
    api,
    doc,
    item,
    id,
    props,
  }),
};
