// \src\components\card\CardFooter.jsx
import React from "react";
import PropTypes from "prop-types";
import ActionIcons from "./ActionIcons";
// 卡片的页脚组件
const CardFooter = ({ likes, comments }) => (
  <div className="h-2">
    <ActionIcons likes={likes} comments={comments} />
  </div>
);

// 卡片页脚组件的属性验证
CardFooter.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};
export default CardFooter;
