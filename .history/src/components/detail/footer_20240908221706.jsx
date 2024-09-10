import React from "react"; // 引入React库
import { Button } from "antd-mobile"; // 从antd-mobile库中引入Button组件
import { useNavigate } from "react-router-dom"; // 引入React Router的useNavigate钩子
const Footer = () => {
  const navigate = useNavigate(); // 使用useNavigate钩子来控制路由导航
  return (
    <div>
      <Button
        className="w-80 left-1/2 transform -translate-x-1/2 h-9  z-10"
        onClick={() => {
          navigate("/"); // 点击按钮时导航到主页
        }}
      >
        返回
      </Button>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white text-center text-xs text-gray-500 z-10 h-4">
        本服务由口袋青年提供
      </div>
    </div>
  );
};
export default Footer; // 导出Footer组件作为默认导出