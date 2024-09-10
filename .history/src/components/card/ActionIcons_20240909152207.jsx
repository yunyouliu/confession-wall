import React, { useState } from "react";
import PropTypes from "prop-types";
import SvgIcon from "../SvgIcon";
import { useNavigate } from "react-router-dom";

const ActionIcons = ({ likes, comments, views, id }) => {
  const [isLiked, setIsLiked] = useState(false); // 追踪点赞状态
  const navigate = useNavigate();

  const handleClick = (id) => {
    // console.log("点击了卡片内容");
    navigate("/detail", { state: { id } });
  };
  const handleLikeClick = () => {
    setIsLiked(!isLiked); // 切换点赞状态
  };

  return (
    <div className="flex justify-between mt-2">
      {/* 点赞图标和数量 */}
      <div className="flex items-center no-select">
        <SvgIcon
          iconName={isLiked ? "dianzan1" : "dianzan"}
          className="icon"
          onClick={handleLikeClick}
        />
        <span className="">{isLiked ? likes + 1 : likes}</span>
        {views && (
          <>
            <SvgIcon iconName="guankan" className="icon ml-3 " />
            <span>{views}</span>
          </>
        )}
      </div>

      {/* 评论图标和数量 */}
     {comments && <div className="flex items-center" onClick={() => handleClick(id)}>
        <SvgIcon iconName="liaotian" className="icon" />
        <span className="ml-1">{comments}</span>
      </div>}
    </div>
  );
};

// 增加新的图标和数值的属性验证
ActionIcons.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number,
  views: PropTypes.number, // 新增观看数值验证
  id: PropTypes.number.isRequired,
};

export default ActionIcons;
