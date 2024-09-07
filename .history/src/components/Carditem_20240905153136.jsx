import { React } from "react";
import { Card, Avatar } from "antd-mobile";

const sex = (
  <svg className="icon" aria-hidden="true">
    <use xlinkHref="#icon-nanxing"></use>
  </svg>
);

const Carditem = () => {
  return (
    <div className="mt-3 ml-2">
      <Card className="bg-purple-300" onClick={() => {}}>
        <div className="text-center flex h-3 items-center">
          <Avatar
            className="w-[20px] h-[20px]"
            src="https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y"
          />
          {sex} | 说说 顶<div className="float-right">30分钟之前</div>
        </div>
        <div>
          <div className="text-center mt-2">今天天气不错</div>
        </div>
        <div className="mt-2"></div>
      </Card>
    </div>
  );
};

export default Carditem;
