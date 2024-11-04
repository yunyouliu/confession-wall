/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-06 14:07:36
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:21:08
 */
import React from "react";
import PropTypes from "prop-types";

// SvgIcon 组件
const SvgIcon = ({ iconName, className = "", ...props }) => {
  return (
    <svg className={`icon ${className}`}  aria-hidden="true" {...props}>
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
