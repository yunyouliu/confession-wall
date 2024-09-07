import React from "react";
import PropTypes from "prop-types";

// 卡片内容组件
const CardContent = ({ text }) => (
  <div className="text-left mt-2 indent-[20px] text-white text-base">
    {text}
  </div>
);

// 卡片内容组件的属性验证
CardContent.propTypes = {
  text: PropTypes.string.isRequired,
};
export default CardContent;
