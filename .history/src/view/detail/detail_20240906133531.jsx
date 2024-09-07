import CardItem from "@/components/Carditem";
import React from "react";
import { useLocation } from "react-router-dom";

const Data = [
  {
    id: 1,
    avatarUrl:
      "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
    name: "匿名",
    sex: "female",
    section: "吐槽",
    time: "5分钟前",
    like: 2,
    comments: 4,
    content: "出一个【全新未安装】床帘 90*190*90cm 图案如下图有人需要没 🎉",
  },
  {
    id: 2,
    avatarUrl:
      "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
    name: "匿名",
    sex: "female",
    section: "说说",
    time: "2小时前",
    like: 2,
    comments: 4,
    content:
      "有人要租房子吗！地址美莱美城市广场电梯房三室一厅 价格美丽近涉外🎉",
  },
  {
    id: 3,
    avatarUrl:
      "https://img.qiqi.pro/mirror/gravatar/avatar/a34fc3a2030b49d9ef5b10bf824e5ff4?s=40&d=retro&f=y",
    name: "匿名",
    sex: "male",
    section: "推广",
    time: "3小时前",
    like: 16,
    comments: 18,
    content: "出一个【全新未安装】床帘 90*190*90cm 图案如下图有人需要没 🎉",
  },
];
function Detail() {
  const location = useLocation(); // 获取传递的 state 参数
  const state = location.state;

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <CardItem
          key={Data}
          avatarUrl={Data.avatarUrl}
          name={Data.name}
          sex={Data.sex}
          time={Data.time}
          content={Data.content}
          likes={Data.like}
          comments={Data.comments}
          section={Data.section}
        />
      </div>
    </div>
  );
}

export default Detail;
