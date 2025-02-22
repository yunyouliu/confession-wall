/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-09 14:24:40
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-22 18:01:14
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

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 获取 Redux 的 dispatch
    const { dispatch } = store;

    // 在发送请求之前，开启 loading
    // dispatch(changeloading(true));

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

    // 根据错误类型显示提示
    if (error.message === "Network Error") {
      // 网络错误（如离线）
      Toast.show({
        content: "网络连接失败，请检查网络",
        position: "bottom",
      });
    } else if (error.response) {
      // 服务器返回的错误（如 4xx、5xx）
      Toast.show({
        content: `请求失败：${error.response.data.message || "服务器错误"}`,
        position: "bottom",
      });
    } else {
      // 其他错误
      Toast.show({
        content: "请求失败：" + error.message,
        position: "bottom",
      });
    }

    return Promise.reject(error);
  }
);

export default axios;