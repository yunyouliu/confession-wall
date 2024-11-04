/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-10-31 17:55:20
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-31 23:01:12
 */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Toast } from "antd-mobile";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //     Toast.show({
  //       content: "请先登录",
  //       position: "bottom",
  //       duration: 2000,
  //     });
  //   }
  //   if (!isLoggedIn) {
  //     // 如果用户未认证，重定向到登录页面
  //     navigate("/login");
  //     Toast.show({
  //       content: "token失效",
  //       position: "bottom",
  //       duration: 2000,
  //     });
  //   }
  // }, [isLoggedIn, navigate]);

  // // 如果用户未认证，返回 null，不渲染子组件
  // if (!isLoggedIn) {
  //   return null;
  // }

  // 如果用户已认证，渲染子组件
  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
