import React from 'react';
import { useLocation } from 'react-router-dom';

function Detail() { // 首字母改为大写
  const location = useLocation(); // 获取传递的 state 参数
  const state= location.state;

  return (
    <div>
      <h1>Detail Page</h1>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
}

export default Detail;