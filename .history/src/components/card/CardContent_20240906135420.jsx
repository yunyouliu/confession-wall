import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const handClick = (id) => {
  console.log("点击了卡片内容");
  navigator(`/detail/${id}`)
};

// 卡片内容组件
const CardContent = ({ text, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="text-left mt-2 indent-[20px] text-white text-base"
      onClick={handClick(id)}
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
