import CardItem from "@/components/Carditem";
import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation(); // 获取传递的 state 参数
  const state = location.state;

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <CardItem
        />
      </div>
    </div>
  );
}

export default Detail;
