import React from "react";
import { useLocation } from "react-router-dom";
const detail = () => {
  const location = useLocation(); // 获取传递的 state 参数
  const { userId } = location.state;

  return <div>User ID: {userId}</div>;
};

export default detail;
