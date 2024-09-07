import React from 'react';
import { Card, Avatar } from 'antd-mobile';


// 性别图标
const SexIcon = ({ sex }) => (
  <svg className="icon" aria-hidden="true">
    <use xlinkHref={sex === 'male' ? '#icon-nanxing' : '#icon-nvxing'}></use>
  </svg>
);

// 操作图标组件
const ActionIcons = () => (
  <div className="flex justify-between mt-2">
    <svg className="icon" aria-hidden="true">
      <use xlinkHref="#icon-dianzan"></use>
    </svg>
    <svg className="icon" aria-hidden="true">
      <use xlinkHref="#icon-liaotian"></use>
    </svg>
  </div>
);

// 卡片内容组件
const CardContent = ({ text }) => (
  <div className="text-left mt-2 indent-[20px] text-white text-base">
    {text}
  </div>
);

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

// 默认导出
export default CardItem;
