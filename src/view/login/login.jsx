// src/LoginPage.jsx
import React, { useState, useCallback, useRef } from "react";
import { Button, Input, Image, Toast } from "antd-mobile";
import { Link, useNavigate } from "react-router-dom";
import Captcha from "react-captcha-code";
import {
  UserOutline,
  UnlockOutline,
  EyeInvisibleOutline,
  EyeOutline,
} from "antd-mobile-icons";
import ParticleBackground from "../../utils/ParticleBackground";
import MD5 from "crypto-js/md5";
import PropTypes from "prop-types";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/userSlice";
import { setLikedItems } from "@/redux/commentSlice";
import { initializeLikeStatus } from "@/api/api";
import { useEffect } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const captchaRef = useRef();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token"); // 从 localStorage 获取 token
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // 从 Redux 获取登录状态
  // 如果已登录就跳转到首页
  useEffect(() => {
    if (isLoggedIn && token) {
      Toast.show({ content: "您已登录" });
      navigate("/index");
    }
  }, [isLoggedIn, navigate]);

  const handleClick = () => {
    captchaRef.current.refresh(); // 刷新验证码
  };

  const handleChange = useCallback((captcha) => {
    // console.log("captcha:", captcha);
    setCaptcha(captcha);
    // setCode(captcha);
  }, []);

  const handleLogin = async () => {
    if (!username || !password || !code) {
      Toast.show({ content: "请填写所有字段" });
      return;
    }

    // 验证码比对
    if (code !== captcha) {
      Toast.show({ content: "验证码错误" });
      captchaRef.current.refresh();
      return;
    }

    try {
      const res = await axios.post("/wall/login", {
        email: username,
        password: MD5(password + "😢").toString(),
      });
      if (res.data.code === 200) {
        localStorage.setItem("token", res.data.data.token);
        const status = await initializeLikeStatus();
        dispatch(
          setLikedItems({
            likedComments: status.data.commentFormIds,
            likedPosts: status.data.essayIds,
          })
        );
        dispatch(setUser(res.data.data));
        navigate("/index");
      } else {
        Toast.show({ content: res.data.msg });
      }
    } catch (error) {
      Toast.show({ content: error.message });
    }
  };

  const togglePasswordVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div
      className="flex items-center justify-center h-full p-4 select-none"
      style={{ backgroundSize: "cover" }}
    >
      <ParticleBackground />
      <div className="w-full max-w-sm p-6  border border-gray-200 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold mb-9 text-center text-purple-900">
          校园墙
        </h1>

        {/* 用户名输入框 */}
        <InputField
          icon={<UserOutline className="ml-2 text-gray-500" fontSize={25} />}
          placeholder="username"
          value={username}
          onChange={setUsername}
        />

        {/* 密码输入框 */}
        <InputField
          icon={<UnlockOutline className="ml-2 text-gray-500" fontSize={25} />}
          placeholder="password"
          type={visible ? "text" : "password"}
          value={password}
          onChange={setPassword}
          rightIcon={
            <div onClick={togglePasswordVisibility}>
              {visible ? (
                <EyeOutline fontSize={25} />
              ) : (
                <EyeInvisibleOutline fontSize={25} />
              )}
            </div>
          }
        />

        {/* 验证码 */}
        <div className="mb-6 flex items-center rounded-md">
          <div className="w-2/3 ml-3">
            <Input
              value={code}
              onChange={setCode}
              type="text"
              placeholder="请输入验证码"
              className="border-none h-9"
            />
          </div>
          <div className="w-1/3">
            <Captcha
              ref={captchaRef}
              charNum={4}
              onClick={handleClick}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button
          block
          color="primary"
          className="rounded-lg"
          size="middle"
          onClick={handleLogin}
        >
          Login
        </Button>
        <div className="text-center mt-7 mb-7 float-left text-sm hover:underline hover:cursor-pointer text-gray-400">
          忘记密码
        </div>
        {/* <div className="flex justify-center mt-2 gap-3">
          {images.map((src, index) => (
            <Image lazy src={src} width={40} height={40} key={index} />
          ))}
        </div> */}
        <div className="text-center mt-7 text-sm text-gray-400 hover:underline float-right">
          <Link to="/register">注册</Link>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-gray-500">
        <div>© 2024 Inklek. All rights reserved.</div>
        <div className="mt-2">
          <img
            width="25"
            src="http://www.flawless.uno:55/wp-content/uploads/2024/11/国徽1024.png"
            alt="国徽"
            className="inline-block align-middle -mt-2"
          />
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            className="hover:underline"
          >
            湘ICP备2024093272号-1
          </a>
        </div>
      </div> */}
    </div>
  );
};

// 输入框组件
const InputField = ({
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  rightIcon,
}) => {
  return (
    <div className="mb-4 flex items-center rounded-md">
      {icon}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="ml-2 w-full border-none h-9"
      />
      {rightIcon && <div className="float-right">{rightIcon}</div>}
    </div>
  );
};

InputField.propTypes = {
  icon: PropTypes.element,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rightIcon: PropTypes.element,
};

export default LoginPage;
