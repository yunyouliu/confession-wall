import React from 'react';
import PropTypes from 'prop-types'; // 引入 prop-types 进行属性验证
import { Card, Avatar } from 'antd-mobile';

// 性别图标
const SexIcon = ({ sex }) => (
  <svg className="icon" aria-hidden="true">
    <use xlinkHref={sex === 'male' ? '#icon-nanxing' : '#icon-nvxing'}></use>
  </svg>
);

SexIcon.propTypes = {
  sex: PropTypes.oneOf(['male', 'female']).isRequired,
};

// 操作图标组件
const ActionIcons = () => (
  <div className="flex justify-between mt-2">
    <svg className="icon" aria-hidden="true">
      <use xlinkHref="#icon-dianzan"></use>
    </svg>
    0
    <svg className="icon" aria-hidden="true">
      <use xlinkHref="#icon-liaotian"></use>
    </svg>
    1
  </div>
);

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
const CardFooter = () => (
  <div className="h-2">
    <ActionIcons />
  </div>
);

// 卡片的头部组件
const CardHeader = ({ avatarUrl, name, sex, time }) => (
  <div className="text-center flex items-center">
    <Avatar className="w-[20px] h-[20px]" src={avatarUrl} />
    {name} <SexIcon sex={sex} /> | 说说
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
  sex: PropTypes.oneOf(['male', 'female']).isRequired,
  time: PropTypes.string.isRequired,
};

// 卡片封装组件
const CardItem = ({ avatarUrl, name, sex, time, content }) => {
  return (
    <div className="mt-3 ml-2">
      <Card className="bg-purple-300" onClick={() => {}}>
        <CardHeader avatarUrl={avatarUrl} name={name} sex={sex} time={time} />
        <CardContent text={content} />
        <CardFooter />
      </Card>
    </div>
  );
};

// 为 CardItem 组件添加属性验证
CardItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.oneOf(['male', 'female']).isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

// 默认导出
export default CardItem;
