import React from "react";
import PropTypes from "prop-types"; // 引入 prop-types 进行属性验证
import { Card, Avatar } from "antd-mobile";
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
  comments,
  section,
}) => {
  return (
    <div className="mt-3 ml-2">
      <Card className="bg-purple-300" onClick={() => {}}>
        <CardHeader
          avatarUrl={avatarUrl}
          name={name}
          sex={sex}
          time={time}
          section={section}
        />
        <CardContent text={content} />
        <CardFooter likes={likes} comments={comments} />
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
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  section: PropTypes.string.isRequired, // 新增板块属性验证
};

// 默认导出
export default CardItem;
