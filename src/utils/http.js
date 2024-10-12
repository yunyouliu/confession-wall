import axios from "axios";
import { store } from "@/redux/store";
import { changeloading } from "@/redux/loadingSlice";

//   配置 axios 的 baseURL
axios.defaults.baseURL = "http://localhost:1112";

axios.defaults.withCredentials = true;


//   超时时间
// axios.defaults.timeout = 5000;

// 配置 axios 的 数据格式化

// 配置 axios 的 状态码验证
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 300;
};

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;

    // 在发送请求之前，开启 loading
    // dispatch(changeloading(true));

    // 在发送请求之前,配置jwt请求头
    if (localStorage.getItem("token")) {
      // config.headers.Authorization = "Bearer " + localStorage.getItem("token");
      config.headers.Authorization = localStorage.getItem("token");
    }

    return config;
  },
  function (error) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;
    // 如果请求出错，关闭 loading
    // dispatch(changeloading(false));
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;
    // 在接收到响应后，关闭 loading
    // dispatch(changeloading(false));
    return response;
  },
  function (error) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;
    // 如果响应出错，关闭 loading
    // dispatch(changeloading(false));

    return Promise.reject(error);
  }
);

export default axios;
