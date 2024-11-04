/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-10-10 14:47:22
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:21:17
 */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Toast } from "antd-mobile";

const ToastContainer = () => {
  const isloading = useSelector((state) => state.isloading.isloading);
    console.log(isloading)
  useEffect(() => {
    if (isloading) {
      Toast.show({
        content: "加载中...",
        icon: "loading",
        position: "bottom",
      });
    }
  }, [isloading]);

  return null; // 这个组件不需要渲染任何东西
};

export default ToastContainer;
