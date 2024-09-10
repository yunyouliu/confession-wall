import axios from "axios";
import { store } from "@/redux/store";
import { changeloading } from "@/redux/loadingSlice";

axios.defaults.baseURL = "http://localhost:3000";

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;

    // 在发送请求之前，开启 loading
    dispatch(changeloading(true));

    return config;
  },
  function (error) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;

    // 如果请求出错，关闭 loading
    dispatch(changeloading(false));

    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;
    // 在接收到响应后，关闭 loading
    dispatch(changeloading(false));

    return response;
  },
  function (error) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;

    // 如果响应出错，关闭 loading
    dispatch(changeloading(false));

    return Promise.reject(error);
  }
);

export default axios;
