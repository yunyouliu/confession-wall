/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-05 20:51:26
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:17:36
 */
// \src\components\card\CardFooter.jsx
import React from "react";
import PropTypes from "prop-types";
import ActionIcons from "./ActionIcons";
// 卡片的页脚组件
const CardFooter = ({ likes, comments,views,id,type}) => (
  <div className="h-2">
    <ActionIcons likes={likes} comments={comments} views={views} id={id} type={type}/>
  </div>
);

// 卡片页脚组件的属性验证
CardFooter.propTypes = {
  likes: PropTypes.number.isRequired,
  views: PropTypes.number,
  comments: PropTypes.number,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
export default CardFooter;
