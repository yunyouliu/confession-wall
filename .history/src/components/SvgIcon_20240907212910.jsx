import React from "react";
import PropTypes from "prop-types";

// SvgIcon 组件
const SvgIcon = ({ iconName, className = "", onClick, ...props }) => {
  return (
    <svg
      className={`icon ${className}`}
      aria-hidden="true"
      onClick={onClick} // 添加 onClick 事件
      {...props}
    >
      <use xlinkHref={`#icon-${iconName}`} />
    </svg>
  );
};

// 属性验证
SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired, // 图标名称必填
  className: PropTypes.string, // 可选的 className
  onClick: PropTypes.func, // 可选的 onClick 函数
};

export default SvgIcon;
