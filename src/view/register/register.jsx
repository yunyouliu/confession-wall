import React, { useState, useEffect } from "react";
import { Input, Button, Toast, List, NavBar } from "antd-mobile";
import { MailOutline, LockOutline } from "antd-mobile-icons"; // 引入图标
import { useNavigate } from "react-router-dom";
import axios from "axios";

// "https://img.zcool.cn/community/011a765912c1dbb5b3086ed4da6cab.jpg@1280w_1l_2o_100sh.jpg"
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();
  const sendVerificationCode = () => {
    if (!email) {
      Toast.show({
        position: "center",
        icon: "fail",
        content: "请输入邮箱!",
      });
      return;
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({
        position: "center",
        icon: "fail",
        content: "请输入正确的邮箱格式!",
      });
      return;
    }

    setIsSending(true);
    setCountdown(60);

    // 发送验证码的 API 请求
    axios.get("/captcha/getCaptcha", { params: { email } }).then((response) => {
      console.log(response.data);
    });
    Toast.show({
      icon: "success",
      content: "验证码发送成功",
    });
    setIsSending(false);

    // 开始倒计时
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const back = () => {
    navigate("/login");
  };

  const register = () => {
    if (!email || !password || !confirmPassword || !code) {
      Toast.show({
        content: "信息不完整!",
      });
      return;
    }

    if (password !== confirmPassword) {
      Toast.show({
        icon: "fail",
        content: "两次输入的密码不一致!",
      });
      return;
    }

    // 注册请求  /wall/register
    axios
      .post("/wall/register", {
        email,
        password,
        emailCode: code,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          Toast.show({
            icon: "success",
            content: "注册成功",
          });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          Toast.show({
            icon: "fail",
            content: res.data.msg,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar
        className="bg-purple-700 w-full p-0 h-12 text-white"
        onBack={back}
      >
        注册
      </NavBar>
      <div className="w-full max-w-sm p-2 mt-8 rounded-lg shadow-sm">
        <List>
          <List.Item
            prefix={
              <MailOutline className="ml-2 text-gray-500" fontSize={35} />
            }
          >
            <Input
              placeholder="请输入邮箱"
              value={email}
              onChange={setEmail}
              type="email"
            />
          </List.Item>
          <List.Item>
            <div className="flex items-center">
              <Input
                className="flex-1"
                placeholder="输入验证码"
                value={code}
                onChange={setCode}
                prefix={<MailOutline />} // 验证码输入框左侧图标
              />
              <Button
                className="ml-2 bg-purple-500 text-white"
                onClick={sendVerificationCode}
                disabled={isSending || countdown > 0}
              >
                {countdown > 0 ? `${countdown}s后再次发送` : "获取验证码"}
              </Button>
            </div>
          </List.Item>
          <List.Item prefix={<LockOutline fontSize={35} />}>
            <Input
              placeholder="设置登录密码"
              value={password}
              onChange={setPassword}
              type="password"
            />
          </List.Item>
          <List.Item prefix="确认密码">
            <Input
              placeholder="再次输入登录密码"
              value={confirmPassword}
              onChange={setConfirmPassword}
              type="password"
            />
          </List.Item>
        </List>
      </div>

      <Button className="w-5/6 bg-purple-700 text-white " onClick={register}>
        立即注册
      </Button>

      {/* <checkbox>我已同意并阅读<a>《u1000用户注册协议》</a></checkbox> */}
    </div>
  );
};

export default Register;
