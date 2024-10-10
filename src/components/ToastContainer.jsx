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
