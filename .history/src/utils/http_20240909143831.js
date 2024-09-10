import axios from "axios";

//   配置 axios 的 baseURL
axios.defaults.baseURL = "http://localhost:3000";
//   超时时间
axios.defaults.timeout = 5000;

// 配置 axios 的 数据格式化
axios.defaults.transformResponse = [
  function (data) {
    return JSON.parse(data);
  },
];
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 300;
};
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前，开启 loading

    return config;
  },
  function (error) {
    // 获取 Redux 的 dispatch

    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
