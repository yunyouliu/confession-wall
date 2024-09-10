import React from "react"; // 引入React库
import { Button } from "antd-mobile"; // 从antd-mobile库中引入Button组件
import { useNavigate } from "react-router-dom"; // 引入React Router的useNavigate钩子
const Footer = () => {
  const navigate = useNavigate(); // 使用useNavigate钩子来控制路由导航
  return (
    <div className="h-full">
      <Button
        className="text-center w-[90%] mt-2 mb-3"
        onClick={() => {
          navigate("/index"); // 点击按钮时导航到主页
        }}
      >
        &lt;&nbsp;返回  
      </Button>
      <div className=" bottom-0 left-0 right-0 p-1 bg-white text-center text-xs text-gray-500 z-10">
        本服务由口袋青年提供
      </div>
    </div>
  );
};
export default Footer; // 导出Footer组件作为默认导出