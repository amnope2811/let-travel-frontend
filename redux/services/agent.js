import axios from "axios";
const API_ROOT = 'http://150.95.30.29:8081';
const headers = () => ({});
const agent = token => {
  let tkEncode = localStorage.getItem("token");
  const tk = tkEncode&&window.atob(tkEncode);
  return axios.create({
    baseURL: `${API_ROOT}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `${tk}`
    },
    timeout: 20000
  });
};

export default agent;
