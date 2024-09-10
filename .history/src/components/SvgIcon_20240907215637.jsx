import React from "react";
import PropTypes from "prop-types";

// SvgIcon 组件
const SvgIcon = ({ iconName, className = "", ...props }) => {
  return (
    <svg className={`icon ${className}`} h-5 w-6 aria-hidden="true" {...props}>
      <use xlinkHref={`#icon-${iconName}`} />
    </svg>
  );
};

// 属性验证
SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired, // 图标名称必填
  className: PropTypes.string, // 可选的 className
};

export default SvgIcon;
