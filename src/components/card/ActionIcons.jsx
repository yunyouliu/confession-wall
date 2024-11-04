/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-05 20:51:00
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-31 23:02:39
 */
import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "../SvgIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLikeAsync } from "@/redux/commentSlice";

const ActionIcons = ({ likes, comments, views, id, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLiked = useSelector((state) =>
    state.comment.likedComments.includes(id)
  );
  const isRequesting = useSelector((state) => state.comment);
  const handleClick = (id) => {
    navigate("/detail", { state: { userId: id } });
  };

  const handleLikeClick = () => {
    if (!isRequesting) {
      dispatch(toggleLikeAsync({ id, type })); // 传递 id 和 type
    }
  };

  return (
    <div className="flex justify-between mt-2">
      <div className="flex items-center no-select">
        <SvgIcon
          iconName={isLiked ? "dianzan1" : "dianzan"}
          className="icon"
          onClick={handleLikeClick}
        />
        <span>{isLiked ? likes + 1 : likes}</span>
        {views && (
          <>
            <SvgIcon iconName="guankan" className="icon ml-3" />
            <span>{views}</span>
          </>
        )}
      </div>

      {comments !== undefined && (
        <div className="flex items-center" onClick={() => handleClick(id)}>
          <SvgIcon iconName="liaotian" className="icon" />
          <span className="ml-1">{comments}</span>
        </div>
      )}
    </div>
  );
};

ActionIcons.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number,
  views: PropTypes.number,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default ActionIcons;
