/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-10-31 17:55:20
 * @LastEditors: yunyouliu
 * @LastEditTime: 2025-02-22 19:35:16
 */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Toast } from "antd-mobile";
import { initializeAuth } from "../redux/authSlice";

const RequireAuth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!token) {
      Toast.show({
        content: "请先登录",
        position: "bottom",
        duration: 2000,
      });
      navigate("/login");
    } else if (token && !isLoggedIn) {
      dispatch(initializeAuth());
    }
  }, [token, isLoggedIn, navigate, dispatch]);

  useEffect(() => {
    if (token && !isLoggedIn) {
      Toast.show({
        content: "401",
        position: "bottom",
        duration: 2000,
      });
    }
  }, [isLoggedIn, token]);

  if (!isLoggedIn || !token) {
    return null;
  }

  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
