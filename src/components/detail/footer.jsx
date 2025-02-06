/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-06 14:59:08
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-06 16:17:24
 */
import React from "react"; // 引入React库
import { Button } from "antd-mobile"; // 从antd-mobile库中引入Button组件
import { useNavigate } from "react-router-dom"; // 引入React Router的useNavigate钩子
const Footer = () => {
  const navigate = useNavigate(); // 使用useNavigate钩子来控制路由导航
  return (
    <div className="h-full relative">
      <Button
        className="text-center w-[90%] -translate-y-10"
        onClick={() => {
          navigate(-1); // 点击按钮时导航到主页
        }}
      >
        &lt;&nbsp;返回
      </Button>
      <div className=" absolute bottom-0 left-0 w-full bg-white  -ml-1 -mr-2 mt-2">
        本服务由口袋青年提供
      </div>
    </div>
  );
};
export default Footer; // 导出Footer组件作为默认导出
