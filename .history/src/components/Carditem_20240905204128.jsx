import React from "react";
import PropTypes from "prop-types"; // 引入 prop-types 进行属性验证
import { Card, Avatar } from "antd-mobile";

// 性别图标组件
const SexIcon = ({ sex }) => (
  <svg className="icon" aria-hidden="true">
    <use xlinkHref={sex === "male" ? "#icon-nanxing" : "#icon-nvxing"}></use>
  </svg>
);

SexIcon.propTypes = {
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
};

// 操作图标组件，显示点赞数和评论数
const ActionIcons = ({ likes, comments }) => (
  <div className="flex justify-between mt-2">
    <div className="flex items-center">
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-dianzan"></use>
      </svg>
      <span className="ml-1">{likes}</span>
    </div>
    <div className="flex items-center">
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-liaotian"></use>
      </svg>
      <span className="ml-1">{comments}</span>
    </div>
  </div>
);

ActionIcons.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};

// 卡片内容组件
const CardContent = ({ text }) => (
  <div className="text-left mt-2 indent-[20px] text-white text-base">
    {text}
  </div>
);

CardContent.propTypes = {
  text: PropTypes.string.isRequired,
};

// 卡片的页脚组件
const CardFooter = ({ likes, comments }) => (
  <div className="h-2">
    <ActionIcons likes={likes} comments={comments} />
  </div>
);

CardFooter.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};

// 卡片的头部组件
const CardHeader = ({ avatarUrl, name, sex, time, section }) => (
  <div className="text-center flex items-center">
    <Avatar className="w-[20px] h-[20px]" src={avatarUrl} />
    {name} <SexIcon sex={sex} />|{section}
    <div className="ml-auto flex items-center">
      <span className="text-xs">{time}</span>
      <svg className="icon ml-2" aria-hidden="true">
        <use xlinkHref="#icon-gengduo"></use>
      </svg>
    </div>
  </div>
);

CardHeader.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(["male", "female"]).isRequired,
  time: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired, // 新增板块属性
};

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
