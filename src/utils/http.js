/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-09 14:24:40
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-22 17:37:10
 */
import axios from "axios";
import { store } from "@/redux/store";
// import { changeloading } from "@/redux/flag";

// 配置 axios 的 baseURL
axios.defaults.baseURL = import.meta.env.VITE_URL;
axios.defaults.withCredentials = true;

// 超时时间
// axios.defaults.timeout = 5000;

// 配置 axios 的 状态码验证
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 300;
};

// 存储待重试的请求队列
const pendingRequests = [];

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;

    // 在发送请求之前，开启 loading
    // dispatch(changeloading(true));

    // 检查网络状态
    if (!navigator.onLine) {
      // 将请求配置和取消控制器存入队列
      const controller = new AbortController();
      config.signal = controller.signal;
      pendingRequests.push({ config, controller });

      // 返回一个自定义错误（避免进入响应拦截器）
      return Promise.reject({
        code: "OFFLINE",
        message: "网络已断开，请求被缓存",
      });
    }

    // 在发送请求之前，配置 JWT 请求头
    if (localStorage.getItem("token")) {
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
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

    // 如果是离线错误，直接返回
    if (error.code === "OFFLINE") {
      return Promise.reject(error);
    }

    // 其他错误处理
    return Promise.reject(error);
  }
);

// 监听网络恢复事件
window.addEventListener("online", () => {
  while (pendingRequests.length > 0) {
    const { config, controller } = pendingRequests.shift();
    // 取消之前的请求（避免冲突）
    controller.abort();
    // 重新发送请求
    axios.request(config);
  }
});

export default axios;