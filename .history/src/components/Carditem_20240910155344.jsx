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

  // 记录滚动位置
  const handleClick = (id) => {
    if (location.pathname == "/index") {
      const currentScrollPosition = window.scrollY; // 获取当前的滚动位置
      localStorage.setItem("scrollPosition", currentScrollPosition); // 保存到本地存储
      navigate("/detail", { state: { id } });
    }else{
      navigate("/index",{state:{id:localStorage.getItem("currentScrollPosition")}});
    }
  };

  return (
    <div className="mt-3 ml-2">
      <Card className="bg-purple-300">
        <CardHeader
          avatarUrl={avatarUrl}
          name={name}
          sex={sex}
          time={time}
          section={section}
          content={content}
        />
        <CardContent text={content} id={userId|0} />
        <CardFooter
          likes={likes}
          views={views}
          comments={comments}
          id={userId}
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
  views: PropTypes.number.isRequired,
  section: PropTypes.string.isRequired,
  userId: PropTypes.number, // 新增用户 ID 的验证
};

// 默认导出
export default CardItem;
