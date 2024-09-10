import axios from "axios";

const instance = axios.create({
    // 设置基础URL，如果大部分请求都针对同一个域名
    baseURL: 'https://api.example.com',
    // 设置默认请求头
    headers: {
        'Content-Type': 'application/json',
        // 可以在这里添加其他默认头部信息
    },
    // 设置超时时间
    timeout: 5000,
    // 其他默认配置...
});

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
