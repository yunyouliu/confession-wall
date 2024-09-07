import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation(); // 获取传递的 state 参数
  const state = location.state;

  return (
    <div>
    
    </div>
  );
}

export default Detail;
