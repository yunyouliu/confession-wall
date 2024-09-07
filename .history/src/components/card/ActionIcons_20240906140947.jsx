import React from "react";
import PropTypes from "prop-types"; // 操作图标组件，显示点赞数和评论数
import SvgIcon from "../SvgIcon";
const ActionIcons = ({ likes, comments }) => (
  <div className="flex justify-between mt-2">
    <div className="flex items-center">
      <SvgIcon iconName="dianzan" className="icon" />
      <span className="ml-1">{likes}</span>
    </div>
    <div className="flex items-center">
      <SvgIcon iconName="liaotian" className="icon" />
      <span className="ml-1">{comments}</span>
    </div>
  </div>
);

// 操作图标组件的属性验证
ActionIcons.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};
export default ActionIcons;
