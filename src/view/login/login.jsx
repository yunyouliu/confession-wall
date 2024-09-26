// src/LoginPage.jsx
import React, { useState } from "react";
import { Button, Input, Image } from "antd-mobile";
import { Link,useNavigate } from "react-router-dom";
import {
  UserOutline,
  UnlockOutline,
  EyeInvisibleOutline,
  EyeOutline,
} from "antd-mobile-icons";
import ParticleBackground from "../../utils/ParticleBackground";
import { Code } from "@/utils/code";

const images = [
  "https://ts3.cn.mm.bing.net/th?id=OSAAS.935FA71F2888C4433B53A47A7EB9115E&w=72&h=72&c=1&rs=1&r=0&o=6&dpr=1.4&pid=5.1",
  "https://cdn.icon-icons.com/icons2/2108/PNG/96/google_icon_130924.png",
  "https://cdn.icon-icons.com/icons2/1753/PNG/96/iconfinder-social-media-applications-6twitter-4102580_113802.png",
];

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    // 处理登录逻辑
    console.log("用户名:", username);
    console.log("密码:", password);
     navigate("/index");
  };

  return (
    <div
      className="flex items-center justify-center h-full  p-4"
      style={{
        // backgroundImage: `url(${"https://patchwiki.biligame.com/images/dwrg/thumb/e/e4/qpfozl19hbv2i50rbnaze6e3a9kk822.png/450px-%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BCx%E9%9D%9E%E4%BA%BA%E5%93%89%E8%81%94%E5%8A%A8%E6%B5%B7%E6%8A%A5.png"})`,
        backgroundSize: "cover",
      }}
    >
      <ParticleBackground />
      <div className="w-full max-w-sm rounded-lg p-6 mt-[30px]">
        <h1 className="text-3xl font-bold mb-9  text-center text-purple-900">
          Inklek
        </h1>
        {/* <h2 className="text-2xl font-bold mb-12 text-left font-sans">Login</h2> */}
        {/* 用户名输入框 */}
        <div className="mb-4 flex items-center  rounded-md">
          <UserOutline className="ml-2 text-gray-500" fontSize={25} />
          <Input
            autoFocus
            placeholder="username"
            value={username}
            onChange={(value) => setUsername(value)}
            className="ml-2 w-full border-none h-9"
          />
        </div>

        {/* 密码输入框 */}
        <div className="mb-6 flex items-center   rounded-md">
          <UnlockOutline className="ml-2 text-gray-500 " fontSize={25} />
          <Input
            placeholder="password"
            type={visible ? "text" : "password"}
            value={password}
            onChange={(value) => setPassword(value)}
            className="ml-2 w-full border-none h-9"
          />
          <div className="float-right">
            {!visible ? (
              <EyeInvisibleOutline
                onClick={() => setVisible(true)}
                fontSize={25}
              />
            ) : (
              <EyeOutline onClick={() => setVisible(false)} fontSize={25} />
            )}
          </div>
        </div>

        {/* 验证码 */}
        <div className="mb-6 flex items-center  rounded-md">
          <div className="w-2/3 ml-3">
            <Input
              value={code}
              onChange={(value) => setCode(value)}
              type="text"
              placeholder="请输入验证码"
              className="border-none h-9"
            />
          </div>
          <div className="w-1/3 ">
            <Code />
          </div>
        </div>

        <Button
          block
          color="primary"
          className="rounded-lg"
          size="large"
          onClick={handleLogin}
        >
          Login
        </Button>
        <div className="text-center mt-7 mb-7 text-sm font-bold text-gray-500">
          Forget Password
        </div>
        <div className="flex justify-center mt-2 gap-3">
          {images.map((index, item) => {
            return <Image lazy src={index} width={40} height={40} key={item} />;
          })}
        </div>
          <div className="text-center mt-7 text-sm text-gray-500">
           <Link to="/register">Don&amp;t have an account?Signup</Link>
          </div>
        {/* <div>
          <div className="text-center bottom-[90px] items-center mr-6 fixed text-sm text-gray-500">
            By clicking Login, you agree to our Terms and Conditions and
            Privacy Policy
          </div>
        </div> */}
        {/* <div className="flex justify-between mt-2 text-sm text-gray-500">
          <a href="/register">没有账号，去注册</a>
          <a href="/">忘记密码</a>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
