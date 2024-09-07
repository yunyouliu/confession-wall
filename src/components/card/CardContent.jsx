import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// 卡片内容组件
const CardContent = ({ text, id }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    // console.log("点击了卡片内容");
    navigate("/detail", { state: { id } });
  };

  return (
    <div
      className="text-left mt-2 indent-[20px] text-white text-base"
      onClick={() => handleClick(id)} // 使用箭头函数包装
    >
      {text}
    </div>
  );
};

// 卡片内容组件的属性验证
CardContent.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardContent;
