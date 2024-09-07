import React, { useState } from "react";
import PropTypes from "prop-types"; 
import SvgIcon from "../SvgIcon";

const ActionIcons = ({ likes, comments, views }) => {
  const [isLiked, setIsLiked] = useState(false); // 追踪点赞状态

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // 切换点赞状态
  };

  return (
    <div className="flex justify-between mt-2">
      {/* 点赞图标和数量 */}
      <div className="flex items-center" onClick={handleLikeClick}>
        <SvgIcon iconName={isLiked ? "dianzan1" : "dianzan"} className="icon" />
        <span className="ml-1">{isLiked ? likes + 1 : likes}</span>
        <SvgIcon iconName="guankan" className="icon" />
        <span className="ml-1">{views}</span>
      </div>


      {/* 评论图标和数量 */}
      <div className="flex items-center">
        <SvgIcon iconName="liaotian" className="icon" />
        <span className="ml-1">{comments}</span>
      </div>

     
    </div>
  );
};

// 增加新的图标和数值的属性验证
ActionIcons.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired, // 新增观看数值验证
};

export default ActionIcons;
