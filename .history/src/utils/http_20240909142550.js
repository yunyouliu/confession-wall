import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

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
