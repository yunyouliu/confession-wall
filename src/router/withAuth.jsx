/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-10-31 17:55:20
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-11-12 17:55:46
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Toast } from "antd-mobile";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // 从 localStorage 获取 token
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // 从 Redux 获取登录状态

  // useEffect(() => {
  //   // 检查 token 是否存在以及是否登录
  //   if (!token || !isLoggedIn) {
  //     Toast.show({
  //       content: "请先登录",
  //       position: "bottom",
  //       duration: 2000,
  //     });
  //     navigate("/login"); // 重定向到登录页面
  //   }
  // }, [isLoggedIn, token, navigate]);

  // // 如果用户未认证或 token 无效，返回 null，不渲染子组件
  // if (!isLoggedIn || !token) {
  //   return null;
  // }

  // 如果用户已认证，渲染子组件
  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
