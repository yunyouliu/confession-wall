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
          匿名 {sex} | 说说 顶
          <div className="float-right flex-1">
            <svg className="icon float-end" aria-hidden="true">
              <use xlinkHref="#icon-gengduo"></use>
            </svg>
            <span className="text-xs float-right">30分钟前</span>
          </div>
        </div>

        <div className="text-left mt-2 indent-[20px] text-white text-base">
          爱打麻将的都毕业了吗，怎么墙上一个要打麻将的都没有 [宕机] [宕机]
        </div>
        <div id="footer" className="">
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-dianzan"></use>
            </svg>
          </div>

          <div>
            
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Carditem;
