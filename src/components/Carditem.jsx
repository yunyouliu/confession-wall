/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: yunyouliu
 * @Date: 2024-09-04 17:53:36
 * @LastEditors: yunyouliu
 * @LastEditTime: 2024-10-27 00:20:32
 */
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Card } from "antd-mobile";
import CardHeader from "./card/CardHeader";
import CardContent from "./card/CardContent";
import CardFooter from "./card/CardFooter";

// 卡片封装组件
const CardItem = ({
  avatarUrl,
  name,
  sex,
  time,
  content,
  likes,
  views,
  comments,
  section,
  userId, // 新增用户 ID
}) => {
  const navigate = useNavigate();

  /**
   * 处理跳转
   * @param {number} - 评论 ID
   * @returns {void}
   */
  const handleCardClick = (id) => {
    // console.log(userId)
    // 使用 state 传递参数
    navigate("/detail", { state: { userId } });
  };

  return (
    <div className="mt-3 ml-2 mr-1">
      <Card className="bg-purple-300">
        <CardHeader
          avatarUrl={avatarUrl}
          name={name}
          sex={sex}
          time={time}
          section={section}
          content={content}
        />
        <CardContent text={content} id={userId | 0} onclick={handleCardClick} />
        <CardFooter
          likes={likes}
          views={views}
          comments={comments}
          id={userId}
          type="post"
        />
      </Card>
    </div>
  );
};

// 为 CardItem 组件添加属性验证
CardItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  views: PropTypes.number,
  section: PropTypes.string.isRequired,
  userId: PropTypes.number, // 新增用户 ID 的验证
};

// 默认导出
export default CardItem;
