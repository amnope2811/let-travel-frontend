import axios from "axios";
const API_ROOT = process.env.BACKEND_URI;
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
